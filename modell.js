const model = {
    app: {
        pages: [ 
            'firstPage',
            'login',
            'newAccount',
            'mainMenu',
            'highscoreList'
        ],
        isLoggedIn: false,
        currentUser: {
            id: null,
            name: '',
            password: '',
            coins: 0,
            highscore: 0,
        }
    },


    inputs: {
        addUser: {
            name: '',
            password: '',
        },

        logIn: {
            name: '',
            password: '',
        }
    },

    data: {
        liveHighscore: 0,
        liveCoins: 0,
        isAlive: true,

        highscoreBoard: [
            {
                navn: 'bananorama AS',
                score: 6969696969,
            },
            {
                navn: 'John',
                score: 9999,
            },
            {
                navn: 'banandamen',
                score: 0,
            },
            {
                navn: 'sverd',
                score: 0,
            },
            {
                navn: 'Mats',
                score: 69,
            },
        ],

        skins: [
            {
                itemnum: '1',
                name: 'brownBanana',
                price: 100,
                img: "",
            },

            {
                itemnum: '2',
                name: 'formalBanana',
                price: 200,
                img: "/images/bananmedslips.png"
            },
            {
                itemnum: '3',
                name: 'bananaSaurus',
                price: 300,
                img: "/images/bananasaurus.png",
            }

        ],

        user: [
            {
                id: '1',
                name: 'bananmann',
                password: 'bananergodt123',
                coins: 0,
                upgrades: {
                    hp: 0,
                    jump: 0,
                },
                ownedSkins: [1,2,3,4,5,6,7,8,9,10],
                equippedSkin: 5,
                highscore: 6969,
            },
            {
                id: '2',
                name: 'bananorama AS',
                password: 'JegElskerBanan',
                coins: 69,
                upgrades: {
                    hp: 0,
                    jump: 0,
                },
                ownedSkins: [1,2,3,4,5,6,7,8,9,10],
                equippedSkin: 5,
                highscore: 6969,
            },
            {
                id: '3',
                name: 'banandamen',
                password: 'nemadnanab',
                coins: 0,
                upgrades: {
                    hp: 0,
                    jump: 0,
                },
                ownedSkins: ['skin1','skin2','skin3','skin4','skin5','skin6','skin7','skin8','skin9','skin10'],
                equippedSkin: ['skin5'],
                highscore: 6969,
            },
            
        ]
    },
}