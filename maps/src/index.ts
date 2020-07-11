import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
// import { company } from "faker";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);

// // let __lat: number = 10;
// // let __lng: number = 10;

// // if (navigator.geolocation) {
// //   navigator.geolocation.getCurrentPosition(
// //     function (position) {
// //       __lat = position.coords.latitude;
// //       __lng = position.coords.latitude;
// //       // 위치를 가져오는데 성공할 경우
// //       console.log(__lat, __lng);

// //       map.setCenter({
// //         lat: position.coords.latitude,
// //         lng: position.coords.longitude,
// //       });
// //     },
// //     function (error) {
// //       // 위치를 가져오는데 실패한 경우
// //       console.log(error.message);
// //     }
// //   );
// // } else {
// //   console.log("Geolocation을 지원하지 않는 브라우저 입니다.");
// // }

// const map = new google.maps.Map(document.getElementById("map"), {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0,
//   },
// });
