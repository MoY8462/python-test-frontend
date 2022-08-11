/**
 * @description Success response ✔
 * @param {string} message Success message. */
 export const complete = (message) => {
    console.log(`✔ Success: ${message}`)
}

/**
 * @description Fail response ✖
 * @param {string} message Error message. */
export const fail = (message) => {
    console.log(`%c✖ ${message}`, 'color: #BF616A;')
    // console.log(`◌ ${error}`)
}

/**
 * @description Info response ℹ
 * @param {string} message Info message. */
export const info = (message) => {
    console.log(`ℹ Info: ${message}`)
}
