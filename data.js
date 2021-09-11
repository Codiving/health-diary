const squat = "squat";
const latPullDown = "latPullDown";
const benchPress = "benchPress";
const shoulderPressMachine = "shoulderPressMachine";
const hammerCurl = "hammerCurl";
const flyMachine = "flyMachine";
const dumbbellCurl = "dumbbellCurl";
const dips = "dips";

const exercises = [
  {
    date: "2021-09-06 (일)",
    exercise: {
      squat: [
        {
          kg: 0,
          count: 15,
          times: 1
        },
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 30,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 50,
          count: 12,
          times: 1
        },
        {
          kg: 40,
          count: 15,
          times: 1
        }
      ],
      latPullDown: [
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 50,
          count: 15,
          times: 1
        },
        {
          kg: 60,
          count: 15,
          times: 2
        },
        {
          kg: 60,
          count: 15,
          times: 1
        }
      ],
      benchPress: [
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 10,
          times: 1
        },
        {
          kg: 30,
          count: 15,
          times: 2
        },
        {
          kg: 30,
          count: 15,
          times: 2
        },
        {
          kg: 40,
          count: 8,
          times: 1
        }
      ],
      shoulderPressMachine: [
        {
          kg: 60,
          count: 15,
          times: 1
        },
        {
          kg: 70,
          count: 12,
          times: 1
        },
        {
          kg: 70,
          count: 8,
          times: 1
        }
      ]
    },
    order: [squat, latPullDown, benchPress, shoulderPressMachine],
    memo: []
  },
  {
    date: "2021-09-07 (화)",
    exercise: {
      benchPress: [
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 30,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 12,
          times: 1
        },
        {
          kg: 40,
          count: 12,
          times: 1
        },
        {
          kg: 50,
          count: 1,
          times: 1
        },
        {
          kg: 40,
          count: 12,
          times: 1
        }
      ],
      latPullDown: [
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 50,
          count: 15,
          times: 1
        },
        {
          kg: 60,
          count: 12,
          times: 1
        },
        {
          kg: 60,
          count: 12,
          times: 1
        }
      ],
      squat: [
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 30,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 50,
          count: 10,
          times: 1
        }
      ],
      hammerCurl: [
        {
          kg: 6,
          count: 14,
          times: 1
        },
        {
          kg: 6,
          count: 15,
          times: 1
        },
        {
          kg: 6,
          count: 15,
          times: 1
        }
      ],
      shoulderPressMachine: [
        {
          kg: 70,
          count: 15,
          times: 1
        },
        {
          kg: 70,
          count: 15,
          times: 1
        },
        {
          kg: 80,
          count: 10,
          times: 1
        },
        {
          kg: 80,
          count: 7,
          times: 1
        }
      ],
      dumbbellCurl: [
        {
          kg: 6,
          count: 7,
          times: 1
        },
        {
          kg: 6,
          count: 9,
          times: 1
        },
        {
          kg: 6,
          count: 8,
          times: 1
        }
      ],
      flyMachine: [
        {
          kg: 70,
          count: 15,
          times: 1
        },
        {
          kg: 80,
          count: 7,
          times: 1
        }
      ]
    },
    order: [
      benchPress,
      squat,
      latPullDown,
      flyMachine,
      shoulderPressMachine,
      hammerCurl,
      dumbbellCurl
    ],
    memo: []
  },
  {
    date: "2021-09-10 (금)",
    exercise: {
      squat: [
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 30,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 50,
          count: 12,
          times: 1
        },
        {
          kg: 60,
          count: 4,
          times: 1
        }
      ],
      latPullDown: [
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 50,
          count: 15,
          times: 1
        },
        {
          kg: 60,
          count: 12,
          times: 2
        },
        {
          kg: 60,
          count: 12,
          times: 1
        }
      ],
      benchPress: [
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 30,
          count: 12,
          times: 1
        },
        {
          kg: 40,
          count: 12,
          times: 1
        },
        {
          kg: 40,
          count: 9,
          times: 1
        },
        {
          kg: 45,
          count: 3,
          times: 1
        },
        {
          kg: 40,
          count: 12,
          times: 1
        }
      ],
      hammerCurl: [
        {
          kg: 6,
          count: 12,
          times: 1
        },
        {
          kg: 6,
          count: 12,
          times: 2
        },
        {
          kg: 6,
          count: 12,
          times: 2
        },
        {
          kg: 6,
          count: 12,
          times: 2
        }
      ]
    },
    order: [squat, latPullDown, benchPress, hammerCurl],
    memo: []
  },
  {
    date: "2021-09-11 (토)",
    exercise: {
      squat: [
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 15,
          times: 1
        },
        {
          kg: 50,
          count: 12,
          times: 1
        },
        {
          kg: 50,
          count: 12,
          times: 1
        },
        {
          kg: 60,
          count: 4,
          times: 1
        }
      ],
      latPullDown: [
        {
          kg: 35,
          count: 12,
          times: 1
        },
        {
          kg: 35,
          count: 8,
          times: 1
        },
        {
          kg: 35,
          count: 12,
          times: 2
        }
      ],
      benchPress: [
        {
          kg: 20,
          count: 15,
          times: 1
        },
        {
          kg: 30,
          count: 15,
          times: 1
        },
        {
          kg: 40,
          count: 12,
          times: 1
        },
        {
          kg: 40,
          count: 12,
          times: 1
        },
        {
          kg: 50,
          count: 4,
          times: 1
        }
      ],
      dips: [
        {
          kg: 80,
          count: 12,
          times: 1
        },
        {
          kg: 80,
          count: 12,
          times: 1
        },
        {
          kg: 80,
          count: 12,
          times: 1
        }
      ],
      hammerCurl: [
        {
          kg: 4,
          count: 15,
          times: 1
        },
        {
          kg: 6,
          count: 15,
          times: 2
        },
        {
          kg: 6,
          count: 15,
          times: 2
        },
        {
          kg: 6,
          count: 15,
          times: 2
        }
      ],
      shoulderPressMachine: [
        {
          kg: 70,
          count: 15,
          times: 1
        },
        {
          kg: 80,
          count: 15,
          times: 1
        },
        {
          kg: 80,
          count: 15,
          times: 1
        },
        {
          kg: 90,
          count: 15,
          times: 1
        }
      ],
      flyMachine: [
        {
          kg: 70,
          count: 15,
          times: 1
        },
        {
          kg: 80,
          count: 12,
          times: 1
        },
        {
          kg: 80,
          count: 15,
          times: 1
        },
        {
          kg: 90,
          count: 4,
          times: 1
        }
      ]
    },
    order: [
      squat,
      benchPress,
      flyMachine,
      dips,
      latPullDown,
      shoulderPressMachine,
      hammerCurl
    ],
    memo: ["Fly 같은 경우 느낌이 안난다 ..."]
  }
];

export { exercises };
