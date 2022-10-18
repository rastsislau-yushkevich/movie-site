import { put, takeEvery } from "redux-saga/effects"
import { JwtResponse, User } from "../../types"
import { ACTIVATION, AUTHORIZE, GET_USER, SIGN_IN, SIGN_UP } from "../action_types/user_action_types"

const authorize = (user: User) => ({
    type: AUTHORIZE,
    user
})

const signUp = (user: User) => ({
    type: SIGN_UP,
    user
})

const activation = (activationInfo: any) => ({
    type: ACTIVATION,
    activationInfo
})

const signIn = (user: User) => ({
    type: SIGN_IN,
    user
})

const getUser = () => ({
    type: GET_USER
})

function* getToken() {
    const token = localStorage.getItem('jwtAccess');
    const respVerify: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/verify/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ token })
    });
    if (respVerify.status === 200) {
      return token
    } else {
      const refreshToken = localStorage.getItem('jwtRefresh');
      const respRefresh: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ refresh: refreshToken })
    });
    const data: JwtResponse = yield respRefresh.json();
    const { access } = data;
    localStorage.setItem('jwtAccess', access);
    return access;
    }
}

function* fetchSignUp(action: any) {
    console.log("fetchsignup")
    const { user } = action;
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    const response: User = yield data.json();
    console.log(response);
}

function* fetchSignIn(action: any) {
    const { user } = action;
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
    if (data.status === 200) {
      const jwt: JwtResponse = yield data.json();
      const { access, refresh } = jwt;
      localStorage.setItem('jwtAccess', access);
      localStorage.setItem('jwtRefresh', refresh);
      yield window.location.href = '/'
    } else {
      alert('No authorization')
    }
}

function* getUserInfo() {
    const token: string = yield getToken();
    console.log(token);
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      }
    });
    const user: User = yield data.json();
    console.log(user);
    yield put(authorize(user));
}

function* activateUser(action: any) {
    const { activationInfo } = action;
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(activationInfo)
    })
    if (data.status < 300) {
      // redirect
    } else {
      // redirect
    }
}

function* watcherUser() {
    yield takeEvery(SIGN_UP, fetchSignUp);
    yield takeEvery(SIGN_IN, fetchSignIn);
    yield takeEvery(ACTIVATION, activateUser);
    yield takeEvery(GET_USER, getUserInfo);
}

export { authorize, signIn, signUp, activation, getUser, watcherUser }