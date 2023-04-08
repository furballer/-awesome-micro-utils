interface User {
  info:
    | {
        vip: true
        last: number
      }
    | {
        vip: false
        msg: string
      }
}

const user: User = {
  info: {
    vip: true,
    last: 2023,
  },
}

if (user.info.vip) {
  console.log(user.info.vip)
}
