new Vue({
    el: '#app',
    data: {
        userName: '',
        likability: 0,
        mode: 'main',
        subMode: 'none',
        currentBg: 'image/campus_bg.png',
        chatMessage: '',
        userInput: '',
        allOptions: [
            { id: 1, text: '아재개그 하기' },
            { id: 2, text: '밥 사주기' },
            { id: 3, text: '학카에서 커피 사주기' },
            { id: 4, text: '도서관에서 같이 공부하기' },
            { id: 5, text: '광교호수공원 산책가기' },
            { id: 6, text: '과방에서 같이 CTF 풀기' }
        ],
        currentOptions: []
    },
    methods: {
        startGame() {
            if (!this.userName.trim()) {
                alert('이름을 알려줘야 같이 학교 다니지!');
                return;
            }
            this.mode = 'select';
            this.currentBg = 'image/2.png';
            this.refreshOptions();
        },
        refreshOptions() {
            this.currentOptions = [...this.allOptions].sort(() => Math.random() - 0.5).slice(0, 3);
        },
        handleAction(id) {
            if (id === 1) {
                this.mode = 'joke_loading';
                this.currentBg = 'image/3.png';
                setTimeout(() => {
                    this.mode = 'joke';
                    this.currentBg = 'image/4.png';
                }, 3000);
            } else if (id === 2) {
                this.subMode = 'food';
            } else if (id === 3) {
                this.likability += 1;
                this.currentBg = 'image/10.png';
                this.mode = 'talk';
                setTimeout(() => { this.resetToSelect(); }, 4000);
            } else if (id === 4) {
                this.currentBg = 'image/11.png';
                this.mode = 'talk';
                setTimeout(() => {
                    this.currentBg = 'image/12.png';
                    setTimeout(() => { this.resetToSelect(); }, 4000);
                }, 3000);
            } else if (id === 5) {
                this.likability += 1;
                this.currentBg = 'image/13.png';
                this.mode = 'talk';
                setTimeout(() => { this.resetToSelect(); }, 4000);
            } else if (id === 6) {
                this.currentBg = 'image/14.png';
                this.mode = 'talk';
                setTimeout(() => {
                    this.currentBg = 'image/15.png';
                    setTimeout(() => { this.resetToSelect(); }, 4000);
                }, 3000);
            }
        },
        selectFood(name, bgPath) {
            this.likability += 1;
            this.currentBg = bgPath;
            this.subMode = 'none';
            this.mode = 'talk';
            setTimeout(() => { this.resetToSelect(); }, 4000);
        },
        submitJoke() {
            const isSuccess = Math.random() > 0.5;
            this.currentBg = isSuccess ? 'image/5.png' : 'image/6.png';

            if (isSuccess) {
                this.likability += 1;
            }

            this.chatMessage = this.userInput;
            this.mode = 'talk';
            this.userInput = '';
            setTimeout(() => { this.resetToSelect(); }, 4000);
        },
        resetToSelect() {
            this.chatMessage = '';
            this.mode = 'select';
            this.subMode = 'none';
            this.currentBg = 'image/2.png';
            if (this.likability < 100) this.refreshOptions();
        },
        confess() {
            this.mode = 'talk';
            this.currentBg = 'image/16.png';
            setTimeout(() => {
                this.currentBg = 'image/17.png';
                setTimeout(() => {
                    this.currentBg = 'image/18.png';
                    setTimeout(() => {
                        if (this.likability >= 100) {
                            this.currentBg = 'image/21.png';
                        } else {
                            this.currentBg = 'image/19.png';
                            setTimeout(() => {
                                this.currentBg = 'image/20.png';
                                this.likability = 0;
                            }, 5000);
                        }
                    }, 5000);
                }, 9000);
            }, 7000);
        }
    }
});