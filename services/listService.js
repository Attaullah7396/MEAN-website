angular.module('demoApp')
  .factory("listService", function () {
    var user = {};
    var _self = this;

      user.semiArray = [
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 1,
              name: "Germanium"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 2,
              name: "Silicon"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 3,
              name: "Silicon carbide"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 4,
              name : "Gallium arsenide"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 5,
              name : "Gallium Nitride"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 6,
              name : "Gallium phosphide"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 7,
              name : "Lead sulphide"
          }
      ];

      user.diodeArray = [
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 1,
              name : "Backward diode"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 2,
              name : "BARITT diode"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 3,
              name : "Laser diode"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 4,
              name : "Gunn diode"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 5,
              name : "Photodiode"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 6,
              name : "PIN diode"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 7,
              name : "PN junction"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 8,
              name : "Tunnel diode"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 9,
              name : "Zener diode"
          }
      ];

      user.connectorArray = [
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 1,
              name : "Audio and Video connector"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 2,
              name : "Automotive connector"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 3,
              name : "Backplane connector"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 4,
              name : "Card Edge connector"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 5,
              name : "Circular connector"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 6,
              name :"D-dub connector"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 7,
              name : "Memory connector"
          },
          {
              part : 123456789,
              part2:  24681012,
              mfc: "demo1",
              desc: "This is demo hard coded data",
              avail: 52,
              price: 45,
              img: 8,
              name : "Power connector"
          }
      ];


    return user;
  });
