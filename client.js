import readline from "readline";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const io = readline.createInterface({
  input: process.stdin, // eslint-disable-line
  output: process.stdout, // eslint-disable-line
});

const getInput = () => {
  io.question(
    "구 코드를 입력하세요(숫자만 입력 가능합니다) : ",
    function (guCode) {
      console.log(`${guCode}`);

      axios
        .get(`/api?guCode=${guCode}`)
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      io.close();
    }
  );
};

setTimeout(getInput, 2000);
