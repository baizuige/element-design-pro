import axios from 'axios'

function getToken() {
  return localStorage.getItem('token')
}

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (!token) {
      logout()
    }
    // 写入 token
    config.headers.Authorization = `Bearer ${token}`
    return config
  }
  // 错误处理，一般不写
)

const errorCode: { [key: number]: (res: any) => void } = {
  10: (res) => {
    const { msg } = res.data
    ElMessage.error(msg || 'token 失效，请重新登录')
    logout()
  },
  100: (res) => {
    const { msg } = res.data
    ElMessage.error(msg || '接口无权限')
  }
}

const httpErrorCode: { [key: number]: (err) => void } = {
  401: (err) => {
    const { msg } = err.data
    ElMessage.error(msg || 'token 失效，请重新登录')
    logout()
  },
  403: (err) => {
    const { msg } = err.data

    ElMessage.error(msg || '接口无权限')
  },
  404: (err) => {
    const { msg } = err.data

    ElMessage.error(msg || '接口不存在')
  }
}

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data instanceof Blob) {
      return res.data
    }
    const { code } = res.data
    if (code === 0) {
      return res.data.data
    }
    errorCode[code]?.(res)
    return Promise.reject(res)
  },
  (err) => {
    const { status } = err
    httpErrorCode[status]?.(err)
    return Promise.reject(err)
  }
)

function logout() {}
