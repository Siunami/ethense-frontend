import reducer, * as actions from './authentication'
import expect from 'expect'

describe('authentication reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      usersExist: true,
      reading: false,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle USERS_EXIST_REQUEST', () => {
    expect(reducer(undefined, { type: actions.USERS_EXIST_REQUEST })).toEqual({
      usersExist: true,
      reading: true,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle USERS_EXIST_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: actions.USERS_EXIST_SUCCESS,
        payload: { usersExist: false },
      })
    ).toEqual({
      usersExist: false,
      reading: false,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle USERS_EXIST_ERROR', () => {
    expect(
      reducer(undefined, {
        type: actions.USERS_EXIST_FAILURE,
        payload: new Error('server error'),
      })
    ).toEqual({
      usersExist: true,
      reading: false,
      error: new Error('server error'),
      loggedIn: false,
    })
  })

  it('should handle CREATE_ADMIN_REQUEST', () => {
    expect(reducer(undefined, { type: actions.CREATE_ADMIN_REQUEST })).toEqual({
      usersExist: true,
      reading: true,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle CREATE_ADMIN_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: actions.CREATE_ADMIN_SUCCESS,
      })
    ).toEqual({
      usersExist: true,
      reading: false,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle CREATE_ADMIN_ERROR', () => {
    expect(
      reducer(undefined, {
        type: actions.CREATE_ADMIN_FAILURE,
        payload: new Error('server error'),
      })
    ).toEqual({
      usersExist: true,
      reading: false,
      error: new Error('server error'),
      loggedIn: false,
    })
  })

  it('should handle LOGIN_REQUEST', () => {
    expect(reducer(undefined, { type: actions.LOGIN_REQUEST })).toEqual({
      usersExist: true,
      reading: true,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGIN_SUCCESS,
      })
    ).toEqual({
      usersExist: true,
      reading: false,
      error: null,
      loggedIn: true,
    })
  })

  it('should handle LOGIN_ERROR', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGIN_FAILURE,
        payload: new Error('server error'),
      })
    ).toEqual({
      usersExist: true,
      reading: false,
      error: new Error('server error'),
      loggedIn: false,
    })
  })

  it('should handle LOGOUT_REQUEST', () => {
    expect(reducer(undefined, { type: actions.LOGOUT_REQUEST })).toEqual({
      usersExist: true,
      reading: true,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGOUT_SUCCESS,
      })
    ).toEqual({
      usersExist: true,
      reading: false,
      error: null,
      loggedIn: false,
    })
  })

  it('should handle LOGOUT_ERROR', () => {
    expect(
      reducer(undefined, {
        type: actions.LOGOUT_FAILURE,
        payload: new Error('server error'),
      })
    ).toEqual({
      usersExist: true,
      reading: false,
      error: new Error('server error'),
      loggedIn: false,
    })
  })
})
