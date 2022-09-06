const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

const playBtn = $$('.play-song');
const imageplay = $$('.img-play');
const nameSong = $$('.title-playsong .name-song');
const nameSinger = $$('.title-playsong .singer');
const audio = $$('.audio');
const progress = $$('#time-song');



const app = {
    currentIndex: 0,
    isPlaying: false,
    isPlayList: true,
    isPSong: false,
    songs: [{
            name: "Pháo Hồng",
            singer: "Đạt Long Vinh",
            path: "./song/PhaoHong.mp3",
            image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/9/8/d/398dd75c920409a73359c8a62f02a166.jpg"
        },
        {
            name: "Vây giữ",
            singer: "Vương Tĩnh Văn",
            path: "./song/VayGiu.mp3",
            image: "https://i.ytimg.com/vi/G_fVwdpLKZ4/maxresdefault.jpg"
        },
        {
            name: "Phi Điểu và Ve Sầu",
            singer: "Nhậm Niên",
            path: "./song/ChimBayCungVe.mp3",
            image: "https://i.ytimg.com/vi/LZJFr0jVp9I/maxresdefault.jpg"
        },
        {
            name: "Đi Đu Đưa Đi",
            singer: "Bích Phương",
            path: "./song/DiDuDuaDi.mp3",
            image: "https://i.scdn.co/image/ab67616d0000b2736791360119094c785db07842"
        },
        {
            name: "Âm Thanh Của Nỗi Nhớ Anh",
            singer: "Ngao Thất Gia",
            path: "./song/AmThanhCuaNoiNhoAnh.mp3",
            image: "https://i.ytimg.com/vi/dcWHNoG4OEk/maxresdefault.jpg"
        },
        {
            name: "Không Biết Phải Làm Sao",
            singer: "Vương Tĩnh Văn",
            path: "./song/KhongBietPhaiLamSao.mp3",
            image: "https://i.ytimg.com/vi/ZP7d55S5O-4/maxresdefault.jpg"
        },
        {
            name: "Kiêu Ngạo",
            singer: "EN",
            path: "./song/KieuNgao.mp3",
            image: "https://i.ytimg.com/vi/DqIDFsLne8k/maxresdefault.jpg"
        },
        {
            name: "Một Cú Lừa",
            singer: "Bích Phương",
            path: "./song/MotCuLua.mp3",
            image: "https://avatar-ex-swe.nixcdn.com/song/share/2020/05/31/0/e/7/e/1590919525767.jpg"
        },
        {
            name: "Mượn Rượu Tỏ Tình",
            singer: "Amee",
            path: "./song/MuonRuouToTinh.mp3",
            image: "https://i.ytimg.com/vi/aGUQsb31TEw/maxresdefault.jpg"
        },
        {
            name: "Vì Mẹ Anh Bắt Chia Tay",
            singer: "Miu Lê Ft Karik",
            path: "./song/ViMeAnhBatChiaTay.mp3",
            image: "https://hocthoisao.com/wp-content/uploads/2022/06/vi-me-anh-bat-chia-tay.jpg"
        },
        {
            name: "Đảo Không Người",
            singer: "Nhậm Niên",
            path: "./song/ĐaoKhongNguoi.mp3",
            image: "https://i.ytimg.com/vi/ZYsweVZo23c/maxresdefault.jpg"
        },


    ],
    artist: [{
            name: "Nhậm Niên",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum, labore ipsum ea laborum excepturi ullam assumenda reprehenderit veniam. Atque rem fugit sint ab, dolore saepe facilis soluta! Rerum, veniam?",
            image: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/09/06/f/d/3/0/1567751369983_600.jpg",
            img: "./img/nhamnien.png"
        },
        {
            name: "Miu Lê",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum, labore ipsum ea laborum excepturi ullam assumenda reprehenderit veniam. Atque rem fugit sint ab, dolore saepe facilis soluta! Rerum, veniam?",
            image: "https://znews-stc.zdn.vn/static/topic/person/miule.jpg",
            img: "./img/DLVinh-2.png"
        },
        {
            name: "Đạt Long Vinh",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum, labore ipsum ea laborum excepturi ullam assumenda reprehenderit veniam. Atque rem fugit sint ab, dolore saepe facilis soluta! Rerum, veniam?",
            image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/9/8/d/398dd75c920409a73359c8a62f02a166.jpg",
            img: "./img/DLVinh-2.png"
        }
    ],
    popular_songs: [{
            name: "ชอบเธออะ",
            singer: "Ptrp Studio",
            path: "./song/ThichCauA-PtrpStudio.mp3",
            image: "https://i.ytimg.com/vi/k3nemuFWpLw/maxresdefault.jpg"
        },
        {
            name: "You And You Only",
            singer: " Kangsom Tanatat Chaiyaat",
            path: "./song/YouAndYouOnly.mp3",
            image: "https://i.ytimg.com/vi/hgxKSo9-oV4/maxresdefault.jpg"
        },
        {
            name: "Dễ Đến Dễ Đi",
            singer: "Quang Hùng MasterD",
            path: "./song/DeDenDeDi.mp3",
            image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/5/e/b/05ebdc00ccf3fb90fc09b3a9e116a2d3.jpg"
        },
        {
            name: "Trên Tình Bạn Dưới Tình Yêu",
            singer: "Min",
            path: "./song/TrenTinhbanDuoiTinhyeu.mp3",
            image: "https://i.ytimg.com/vi/0R8IbpKXavM/hqdefault.jpg"
        },
        {
            name: "Là Do Em Xui Thôi",
            singer: "Khói, Sofia, Châu Đăng Khoa",
            path: "./song/LaDoEmXuiThoi.mp3",
            image: "https://i.scdn.co/image/ab67616d0000b2738faf0fc3a518f4f1d96d17f1"
        },
        {
            name: "Growl",
            singer: "Exo",
            path: "./song/Growl.mp3",
            image: "https://znews-photo.zingcdn.me/w660/Uploaded/rotntt/2013_12_26/1_EXO.jpg"
        },
        {
            name: "Tình Yêu Vĩnh Viễn Không Mất Đi",
            singer: "Châu Hưng Triết",
            path: "./song/TinhYeuVinhVienKhongMatDi.mp3",
            image: "https://avatar-ex-swe.nixcdn.com/song/2021/03/22/4/e/f/5/1616384505759_640.jpg"
        },
        {
            name: "Love Shot",
            singer: "Exo",
            path: "./song/LoveShot.mp3",
            image: "https://i1.sndcdn.com/artworks-000470992887-jse9l5-t500x500.jpg"
        },
        {
            name: "Mượn Rượu Tỏ Tình",
            singer: "Amee",
            path: "./song/MuonRuouToTinh.mp3",
            image: "https://i.ytimg.com/vi/aGUQsb31TEw/maxresdefault.jpg"
        },
        {
            name: "Vì Mẹ Anh Bắt Chia Tay",
            singer: "Miu Lê Ft Karik",
            path: "./song/ViMeAnhBatChiaTay.mp3",
            image: "https://hocthoisao.com/wp-content/uploads/2022/06/vi-me-anh-bat-chia-tay.jpg"
        },
        {
            name: "Đảo Không Người",
            singer: "Nhậm Niên",
            path: "./song/DaoKhongNguoi.mp3",
            image: "https://i.ytimg.com/vi/ZYsweVZo23c/maxresdefault.jpg"
        },


    ],
    renderSong: function() {
        const html = this.songs.map((song, index) => {
            return `
            <div class="songs ${index=== this.currentIndex ? 'active' : ''}" data-index=${index} >
                <div class="number-song">${index + 1}</div>
                <div class="thumb" style="background-image: url(${song.image});"></div>
                <div class="title-song">
                    <div class="name-song">${song.name}</div>
                    <div class="singer">${song.singer}</div>
                </div>
                <div class="action">
                    <i class='bx bxs-caret-right-circle'></i>
                </div>
            </div>
            `
        })

        $$('.playlist-songs').innerHTML = html.join('');
    },

    renderPopularSong: function() {
        const popularSong = this.popular_songs.map((song, index) => {
            return `
            <div class="item-popular" data-songpopular=${index}>
                <div class="theme-song">
                    <img src="${song.image}" alt="">
                </div>
                <div class="name">${song.name}</div>
                <div class="singer">${song.singer}</div>
            </div>
            `
        })
        $$('.list-popular').innerHTML = popularSong.join('');

    },
    renderArtist: function() {
        const artists = this.artist.map((artist) => {
            return `
            <div class="artists-item">
                <img src="${artist.image}" alt="">
            </div>
            `
        })

        $$('.list-popular_artist').innerHTML = artists.join('');

    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
                get: function() {
                    return this.songs[this.currentIndex];
                }
            }),

            Object.defineProperty(this, 'currentPSong', {
                get: function() {
                    return this.popular_songs[this.currentIndex];
                }
            })
    },
    render: function() {
        this.renderSong();
        this.renderPopularSong();
        this.renderArtist();
    },
    handleEvent: function() {
        const _this = this;


        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        audio.onplay = function() {
            _this.isPlaying = true;
            $$('.autoplay').classList.remove('bx-play');
            $$('.autoplay').classList.add('bx-pause');

        }
        audio.onpause = function() {
            _this.isPlaying = false;
            $$('.autoplay').classList.add('bx-play');
            $$('.autoplay').classList.remove('bx-pause');
        }

        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent;

                var minEnd = Math.floor(audio.duration % 3600 / 60);
                var secEnd = Math.floor(audio.duration % 3600 % 60);
                $$('.time-end').textContent = minEnd + '.' + secEnd;

                var minSong = Math.floor(audio.currentTime % 3600 / 60);
                var secSong = Math.floor(audio.currentTime % 3600 % 60);
                $$('.time-default').textContent = minSong + '.' + secSong;
            }

        }

        progress.onchange = function(e) {
            const seekTime = e.target.value * audio.duration / 100;
            audio.currentTime = seekTime;
        }

        document.querySelector('.playlist-songs').onclick = function(e) {
            const songEle = e.target.closest('.songs:not(.active)');
            if (songEle || e.target.closest('.radio-check')) {
                if (songEle) {
                    _this.currentIndex = Number(songEle.dataset.index);
                    _this.loadCurrentsong();
                    _this.renderSong();
                    audio.play();
                }
            }

        }

        document.querySelector('.list-popular').onclick = function(e) {
            $$('.songs').classList.remove('active');
            _this.isPlayList = false;
            _this.isPSong = true;
            const songEle = e.target.closest('.item-popular');
            if (songEle) {
                _this.currentIndex = Number(songEle.dataset.songpopular);
                _this.loadCurrentsong();
                // _this.renderPopularSong();
                audio.play();
            }


        }

        $$('#volume-value').onchange = function() {
            audio.volume = $$('#volume-value').value / 100;
        }
        $$('.prev-song').onclick = function() {
            _this.backSong();
            audio.play();
            _this.renderSong();
        }
        $$('.next-song').onclick = function() {
            _this.forwardSong();
            audio.play();
            _this.renderSong();
        }

    },
    loadCurrentsong: function() {
        // nameSong.textContent = this.currentSong.name;
        // nameSinger.textContent = this.currentSong.singer;
        // imageplay.src = this.currentSong.image;
        // audio.src = this.currentSong.path;
        if (this.isPlayList) {
            nameSong.textContent = this.currentSong.name;
            nameSinger.textContent = this.currentSong.singer;
            imageplay.src = this.currentSong.image;
            audio.src = this.currentSong.path;
        } else {
            nameSong.textContent = this.currentPSong.name;
            nameSinger.textContent = this.currentPSong.singer;
            imageplay.src = this.currentPSong.image;
            audio.src = this.currentPSong.path;
        }
    },
    forwardSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentsong();
    },
    backSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentsong();
    },
    start: function() {
        this.defineProperties();

        this.handleEvent();

        this.loadCurrentsong();

        //render playlist
        this.render();

    }
}

app.start();