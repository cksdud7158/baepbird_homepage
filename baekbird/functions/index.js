const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://baekbirdcompany-43fde.firebaseio.com",
});

const db = admin.database();
const fdb = admin.firestore();

const nodemailer = require("nodemailer");

const smtpServerURL = "smtp.naver.com"; //email SMTP 서버 주소
const authUser = "cksdud7158@naver.com"; //email 계정 아이디 또는 이메일
const authPass = "dnacks1!"; //email 계정 비밀번호
const fromEmail = authUser; //보내는 사람 이메일 주소

exports.sendEmail = functions
  .region("asia-northeast3")
  .firestore.document("contact/{value}")
  .onCreate(async () => {
    const sn = await fdb
      .collection("contact")
      .orderBy("time", "desc")
      .limit(2)
      .get();

    var items = sn.docs.map((v) => {
      const item = v.data();
      return {
        id: v.id,
        name: item.name,
        contactNum: item.contactNum,
        email: item.email,
        content: item.content,
        time: item.time,
      };
    });

    //메일 보내기
    let transporter = nodemailer.createTransport({
      host: smtpServerURL, //SMTP 서버 주소
      secure: true, //보안 서버 사용 false로 적용시 port 옵션 추가 필요
      auth: {
        user: authUser, //메일서버 계정
        pass: authPass, //메일서버 비번
      },
    });

    let mailOptions = {
      from: fromEmail, //보내는 사람 주소
      to: "baekbird.company@gmail.com", //받는 사람 주소
      subject: "홈페이지를 통해서 온 문의 메일!!!!!" + items[0].name, //제목
      html:
        "담당자 이름: " +
        items[0].name +
        "<br/>" +
        "담당자 연락처: " +
        items[0].contactNum +
        "<br/>" +
        "담당자 이메일: " +
        items[0].email +
        "<br/>" +
        "문의 내용" +
        items[0].content,
      //본문
    };

    //전송 시작!
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        //에러
        console.log(error);
      }
      //전송 완료
      console.log("Finish sending email : " + info.response);
      transporter.close();
    });
  });
