const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증처리하는 곳

  //클라이언트 쿠키에서 토큰을 가져온다 : 쿠키파서 이용
  let token = req.cookies.x_auth;
  console.log(req.cookies, token);

  //토큰을 복호화 한 후 유저를 찾는다
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAth: false, error: ture });

    req.token = token;
    req.user = user;
    next();
  });

  //유저가 있으면 인증 오케이

  //유저가 없으면 인증 놉
};

module.exports = { auth };
