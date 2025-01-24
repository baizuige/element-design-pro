<template>
  <div class="login-page">
    <div class="login-container" :class="{ 'is-register': isRegister }">
      <div class="form-box login">
        <form action="">
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" required placeholder="Username" />
            <i class="bx bxs-user"></i>
          </div>
          <div class="input-box">
            <input type="password" required placeholder="Password" />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="forgot-link">
            <a href="#">Forget password?</a>
          </div>
          <el-button color="#7494ec" type="primary" class="btn"
            >Login</el-button
          >
          <p>or login with social platforms</p>
          <div class="social-icons">
            <a href="#"><i class="bx bxl-google"></i></a>
            <a href="#"><i class="bx bxl-facebook"></i></a>
            <a href="#"><i class="bx bxl-github"></i></a>
            <a href="#"><i class="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>
      <div class="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div class="input-box">
            <input type="text" required placeholder="Username" />
            <i class="bx bxs-user"></i>
          </div>
          <div class="input-box">
            <input type="text" required placeholder="Email" />
            <i class="bx bxs-envelope"></i>
          </div>
          <div class="input-box">
            <input type="password" required placeholder="Password" />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <el-button color="#7494ec" type="primary" class="btn"
            >Register</el-button
          >
          <p>or register with social platforms</p>
          <div class="social-icons">
            <a href="#"><i class="bx bxl-google"></i></a>
            <a href="#"><i class="bx bxl-facebook"></i></a>
            <a href="#"><i class="bx bxl-github"></i></a>
            <a href="#"><i class="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>
      <div class="toggle-box">
        <div class="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <el-button
            color="transparent"
            class="btn register-btn"
            @click="isRegister = true"
          >
            Register
          </el-button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <el-button
            color="transparent"
            class="btn login-btn"
            @click="isRegister = false"
          >
            Login
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isRegister = ref(false)
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(90deg, #e2e2e2, #c9d6ff);
  .login-container {
    position: relative;
    width: 850px;
    height: 550px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    color: #333;
    margin: 20px;
    overflow: hidden;
    h1 {
      font-size: 36px;
      margin: -10px 0;
    }

    p {
      font-size: 14px;
      margin: 15px 0;
    }
    .form-box {
      position: absolute;
      right: 0;
      width: 50%;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      color: #333;
      text-align: center;
      padding: 40px;
      z-index: 1;
      transition:
        0.4s ease-in-out 0.8s,
        visibility 0s 0.8s;
      form {
        width: 100%;

        .input-box {
          position: relative;
          margin: 30px 0;
          input {
            width: 100%;
            padding: 13px 50px 13px 20px;
            background: #eee;
            border-radius: 8px;
            border: none;
            outline: none;
            font-size: 16px;
            color: #333;
            font-weight: 500;
            ::placeholder {
              color: #888;
              font-weight: 400;
            }
          }
          i {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
            color: #888;
          }
        }
        .forgot-link {
          margin: -15px 0 15px;
          a {
            font-size: 14px;
            color: #333;
            text-decoration: none;
          }
        }
        .btn {
          width: 100%;
          height: 48px;
          // background: #7494ec;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          font-size: 16px;
          color: #fff;
          font-weight: 600;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          a {
            display: inline-flex;
            padding: 10px;
            border: 2px solid #ccc;
            border-radius: 8px;
            font-size: 24px;
            color: #333;
            text-decoration: none;
            margin: 0 8px;
          }
        }
      }

      &.register {
        visibility: hidden;
      }
    }
    .toggle-box {
      position: relative;
      width: 100%;
      height: 100%;
      &::before {
        content: '';
        position: absolute;
        left: -250%;
        width: 300%;
        height: 100%;
        background: #7494ec;
        border-radius: 150px;
        z-index: 2;
        transition: 1s ease-in-out;
      }
      .toggle-panel {
        position: absolute;
        width: 50%;
        height: 100%;
        // background: seagreen;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        transition: 0.4s ease-in-out;
        &.toggle-left {
          left: 0;
          transition-delay: 0.8s;
        }
        &.toggle-right {
          right: -50%;
          transition-delay: 0.4s;
        }
        p {
          margin-bottom: 20px;
        }
        .btn {
          width: 160px;
          height: 46px;
          // background: transparent;
          border: 2px solid #fff;
          font-size: 16px;
          color: #fff;
          font-weight: 600;
        }
      }
    }
    &.is-register {
      .form-box {
        right: 50%;
        &.register {
          visibility: visible;
        }
      }
      .toggle-panel {
        &.toggle-left {
          left: -50%;
          transition-delay: 0.4s;
        }
        &.toggle-right {
          right: 0;
          transition-delay: 0.8s;
        }
      }
      .toggle-box {
        &::before {
          left: 50%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .login-container {
      height: calc(100vh - 40px);
      .form-box {
        bottom: 0;
        width: 100%;
        height: 70%;
      }
      .toggle-box {
        &::before {
          left: 0;
          top: -270%;
          width: 100%;
          height: 300%;
          border-radius: 20vw;
        }
        .toggle-panel {
          width: 100%;
          height: 30%;
          &.toggle-left {
            top: 0;
          }
          &.toggle-right {
            right: 0;
            bottom: -30%;
          }
        }
      }
      &.is-register {
        .form-box {
          right: 0;
          bottom: 30%;
        }
        .toggle-box {
          &::before {
            left: 0;
            top: 70%;
          }
        }
        .toggle-panel {
          &.toggle-left {
            left: 0;
            top: -30%;
          }
          &.toggle-right {
            right: 0;
            bottom: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .form-box {
      padding: 20px;
    }
    .toggle-panel h1 {
      font-size: 30px;
    }
  }
}
</style>
