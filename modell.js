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
            'brown banana',
            'formal banana',
            'dino banana',
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
                ownedSkins: [],
                equippedSkin: [],
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
                ownedSkins: [],
                equippedSkin: [],
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
                ownedSkins: [],
                equippedSkin: [],
                highscore: 6969,
            },
            
        ]
    },
}