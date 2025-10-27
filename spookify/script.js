 const musicData = {
    playlists: {
    madeForYou: [
        {
        id: 'daily-mix-1',
        name: 'Daily Mix 1',
        desc: 'Game of Thrones, Ramin Djawadi, and more',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'light-of-seven', 'rains-of-castamere']
        },
        {
        id: 'discover-weekly',
        name: 'Discover Weekly',
        desc: 'Your weekly mixtape of fresh music',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
        tracks: ['stark-theme', 'targaryen-theme', 'dracarys']
        },
        {
        id: 'release-radar',
        name: 'Release Radar',
        desc: 'New music from Westeros',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        tracks: ['dance-of-dragons', 'north-remembers', 'winterfell-theme']
        },
        {
        id: 'on-repeat',
        name: 'On Repeat',
        desc: 'Your most played songs',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'light-of-seven', 'stark-theme']
        },
        {
        id: 'repeat-rewind',
        name: 'Repeat Rewind',
        desc: 'Songs you loved and forgot about',
        image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        tracks: ['rains-of-castamere', 'goodbye-brother', 'dracarys']
        },
        {
        id: 'time-capsule',
        name: 'Your Time Capsule',
        desc: 'We made you a personalized playlist',
        image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop',
        tracks: ['targaryen-theme', 'north-remembers', 'dance-of-dragons']
        }
    ],
    madeForDaenerys: [
        {
        id: 'daenerys-mix',
        name: 'Daenerys Daily Mix',
        desc: 'Fire and Blood themed',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
        tracks: ['targaryen-theme', 'dracarys', 'dance-of-dragons']
        },
        {
        id: 'dragon-songs',
        name: 'Dragon Songs',
        desc: 'Epic dragon themes',
        image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=400&fit=crop',
        tracks: ['dracarys', 'dance-of-dragons', 'targaryen-theme']
        },
        {
        id: 'mother-of-dragons',
        name: 'Mother of Dragons',
        desc: 'Khaleesi\'s journey',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop',
        tracks: ['targaryen-theme', 'got-main-theme', 'dracarys']
        },
        {
        id: 'fire-and-blood',
        name: 'Fire and Blood',
        desc: 'House Targaryen anthology',
        image: 'https://images.unsplash.com/photo-1604076984203-587c92ab2e58?w=400&h=400&fit=crop',
        tracks: ['dance-of-dragons', 'targaryen-theme', 'dracarys']
        },
        {
        id: 'breaker-of-chains',
        name: 'Breaker of Chains',
        desc: 'Liberation anthems',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        tracks: ['targaryen-theme', 'dracarys', 'got-main-theme']
        },
        {
        id: 'dothraki-sea',
        name: 'Across the Dothraki Sea',
        desc: 'Eastern melodies',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        tracks: ['targaryen-theme', 'dance-of-dragons', 'dracarys']
        }
    ],
    madeForJon: [
        {
        id: 'jon-mix',
        name: 'Jon Snow Daily Mix',
        desc: 'The North Remembers',
        image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&h=400&fit=crop',
        tracks: ['stark-theme', 'north-remembers', 'winterfell-theme']
        },
        {
        id: 'nights-watch',
        name: 'Night\'s Watch',
        desc: 'Songs of the Wall',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop',
        tracks: ['north-remembers', 'winterfell-theme', 'stark-theme']
        },
        {
        id: 'king-in-north',
        name: 'King in the North',
        desc: 'Northern anthems',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        tracks: ['stark-theme', 'got-main-theme', 'north-remembers']
        },
        {
        id: 'winter-is-coming',
        name: 'Winter Is Coming',
        desc: 'Stark family themes',
        image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=400&h=400&fit=crop',
        tracks: ['winterfell-theme', 'stark-theme', 'goodbye-brother']
        },
        {
        id: 'wolf-and-dragon',
        name: 'Wolf and Dragon',
        desc: 'Jon & Daenerys',
        image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=400&fit=crop',
        tracks: ['stark-theme', 'targaryen-theme', 'got-main-theme']
        },
        {
        id: 'white-wolf',
        name: 'The White Wolf',
        desc: 'Jon\'s journey',
        image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=400&h=400&fit=crop',
        tracks: ['north-remembers', 'stark-theme', 'winterfell-theme']
        }
    ],
    recentlyPlayed: [
        {
        id: 'got-main',
        name: 'GOT Main Themes',
        desc: 'Epic soundtracks',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'light-of-seven', 'rains-of-castamere']
        },
        {
        id: 'house-stark',
        name: 'House Stark',
        desc: 'Winter is Coming',
        image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=400&fit=crop',
        tracks: ['stark-theme', 'goodbye-brother', 'north-remembers']
        },
        {
        id: 'epic-battles',
        name: 'Epic Battles',
        desc: 'War soundtracks',
        image: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'light-of-seven', 'stark-theme']
        },
        {
        id: 'orchestral-got',
        name: 'Orchestral GOT',
        desc: 'Full orchestra versions',
        image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'targaryen-theme', 'light-of-seven']
        },
        {
        id: 'piano-covers',
        name: 'Piano Covers',
        desc: 'Beautiful piano arrangements',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=400&fit=crop',
        tracks: ['light-of-seven', 'rains-of-castamere', 'stark-theme']
        },
        {
        id: 'emotional-moments',
        name: 'Emotional Moments',
        desc: 'Heart-touching themes',
        image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop',
        tracks: ['goodbye-brother', 'rains-of-castamere', 'winterfell-theme']
        }
    ],
    westerosRadio: [
        {
        id: 'got-radio',
        name: 'GOT Radio',
        desc: 'Based on your taste',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'stark-theme', 'targaryen-theme']
        },
        {
        id: 'ramin-djawadi-radio',
        name: 'Ramin Djawadi Radio',
        desc: 'Composer spotlight',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'light-of-seven', 'rains-of-castamere']
        },
        {
        id: 'fantasy-radio',
        name: 'Fantasy Radio',
        desc: 'Epic fantasy soundtracks',
        image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'targaryen-theme', 'dance-of-dragons']
        },
        {
        id: 'medieval-radio',
        name: 'Medieval Radio',
        desc: 'Medieval & folk',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        tracks: ['rains-of-castamere', 'stark-theme', 'winterfell-theme']
        },
        {
        id: 'cinematic-radio',
        name: 'Cinematic Radio',
        desc: 'Epic cinematic music',
        image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'light-of-seven', 'dance-of-dragons']
        },
        {
        id: 'battle-radio',
        name: 'Battle Radio',
        desc: 'War drums & intense themes',
        image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=400&fit=crop',
        tracks: ['got-main-theme', 'stark-theme', 'targaryen-theme']
        }
    ]
    },
    tracks: {
    'got-main-theme': { id: 'got-main-theme', title: 'Game of Thrones Main Theme', artist: 'Ramin Djawadi', duration: 225, icon: '🐉', src: '' },
    'light-of-seven': { id: 'light-of-seven', title: 'Light of the Seven', artist: 'Ramin Djawadi', duration: 600, icon: '🎹', src: '' },
    'rains-of-castamere': { id: 'rains-of-castamere', title: 'The Rains of Castamere', artist: 'Ramin Djawadi', duration: 280, icon: '🦁', src: '' },
    'stark-theme': { id: 'stark-theme', title: 'Goodbye Brother', artist: 'Ramin Djawadi', duration: 240, icon: '🐺', src: '' },
    'goodbye-brother': { id: 'goodbye-brother', title: 'Winterfell Theme', artist: 'Ramin Djawadi', duration: 195, icon: '❄️', src: '' },
    'north-remembers': { id: 'north-remembers', title: 'The North Remembers', artist: 'Ramin Djawadi', duration: 210, icon: '⚔️', src: '' },
    'targaryen-theme': { id: 'targaryen-theme', title: 'Khaleesi Theme', artist: 'Ramin Djawadi', duration: 180, icon: '🐉', src: '' },
    'dracarys': { id: 'dracarys', title: 'Dracarys', artist: 'Ramin Djawadi', duration: 165, icon: '🔥', src: '' },
    'dance-of-dragons': { id: 'dance-of-dragons', title: 'Dance of Dragons', artist: 'Ramin Djawadi', duration: 320, icon: '🐲', src: '' },
    'winterfell-theme': { id: 'winterfell-theme', title: 'Winterfell', artist: 'Ramin Djawadi', duration: 198, icon: '🏰', src: '' }
    },
    houses: [
    { id: 'stark', icon: '🐺', name: 'House Stark', subtitle: 'Winter is Coming', img: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=400&fit=crop' },
    { id: 'lannister', icon: '🦁', name: 'House Lannister', subtitle: 'Hear Me Roar', img: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=400&h=400&fit=crop' },
    { id: 'targaryen', icon: '🐉', name: 'House Targaryen', subtitle: 'Fire and Blood', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop' },
    { id: 'tyrell', icon: '🌹', name: 'House Tyrell', subtitle: 'Growing Strong', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' },
    { id: 'baratheon', icon: '🦌', name: 'House Baratheon', subtitle: 'Ours is the Fury', img: 'https://images.unsplash.com/photo-1551084119-2ee49f5e0f9f?w=400&h=400&fit=crop' },
    { id: 'greyjoy', icon: '🐙', name: 'House Greyjoy', subtitle: 'We Do Not Sow', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop' }
    ],
    characters: [
    { id: 'jon', icon: '🐺', name: 'Jon Snow', subtitle: 'King in the North', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { id: 'daenerys', icon: '🐉', name: 'Daenerys Targaryen', subtitle: 'Mother of Dragons', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 'tyrion', icon: '🦁', name: 'Tyrion Lannister', subtitle: 'The Halfman', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { id: 'arya', icon: '⚔️', name: 'Arya Stark', subtitle: 'No One', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { id: 'cersei', icon: '👑', name: 'Cersei Lannister', subtitle: 'Queen Regent', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
    { id: 'jaime', icon: '🗡️', name: 'Jaime Lannister', subtitle: 'Kingslayer', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' }
    ],
    episodes: {
    season1: [
        { id: 's1e1', title: 'Winter Is Coming', episode: 'S1 E1', duration: '62:02', icon: '❄️' },
        { id: 's1e9', title: 'Baelor', episode: 'S1 E9', duration: '57:17', icon: '⚔️' },
        { id: 's1e10', title: 'Fire and Blood', episode: 'S1 E10', duration: '53:03', icon: '🐉' }
    ],
    season8: [
        { id: 's8e3', title: 'The Long Night', episode: 'S8 E3', duration: '82:00', icon: '🌙' },
        { id: 's8e5', title: 'The Bells', episode: 'S8 E5', duration: '78:00', icon: '🔔' },
        { id: 's8e6', title: 'The Iron Throne', episode: 'S8 E6', duration: '80:00', icon: '👑' }
    ]
    },
    lyrics: {
    'got-main-theme': [
        { time: 0, text: 'Instrumental' },
        { time: 5, text: 'Epic orchestral theme' },
        { time: 15, text: 'Westeros awaits...' }
    ],
    'rains-of-castamere': [
        { time: 0, text: 'And who are you, the proud lord said' },
        { time: 6, text: 'That I must bow so low?' },
        { time: 12, text: 'Only a cat of a different coat' },
        { time: 18, text: 'That\'s all the truth I know' }
    ]
    }
};

 
let audio = document.getElementById('audioPlayer');
let isPlaying = false;
let currentTrack = null;
let currentPlaylist = null;
let currentTrackIndex = -1;
let volume = 0.7;
let isMuted = false;
let isShuffled = false;
let repeatMode = 0;
let isLiked = false;
let currentHouse = 'baratheon';
let showingLyrics = false;
let progressUpdateInterval = null;

 
document.addEventListener('DOMContentLoaded', () => {
    selectHouse(currentHouse, true);
    renderAllContent();
    updateGreeting();
    setInterval(updateGreeting, 60000);
    
    audio.volume = volume;
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', onTrackEnded);
    audio.addEventListener('loadedmetadata', () => {
    document.getElementById('totalTime').textContent = formatTime(audio.duration);
    });

    const saved = localStorage.getItem('westerosPlaylists');
    if (saved) {
    try {
        const custom = JSON.parse(saved);
        musicData.playlists.custom = custom;
    } catch (e) {}
    }
    renderAllContent();
});

function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    document.getElementById('greeting').textContent = greeting;
}

 
function renderAllContent() {
    renderPlaylists();
    renderMadeForYou();
    renderMadeForDaenerys();
    renderMadeForJon();
    renderRecentlyPlayed();
    renderWesterosRadio();
    renderHouses();
    renderCharacters();
    renderEpisodes();
}

function renderMadeForYou() {
    renderPlaylistSection('madeForYouGrid', musicData.playlists.madeForYou);
}

function renderMadeForDaenerys() {
    renderPlaylistSection('madeForDaenerysGrid', musicData.playlists.madeForDaenerys);
}

function renderMadeForJon() {
    renderPlaylistSection('madeForJonGrid', musicData.playlists.madeForJon);
}

function renderRecentlyPlayed() {
    renderPlaylistSection('recentlyPlayedGrid', musicData.playlists.recentlyPlayed);
}

function renderWesterosRadio() {
    renderPlaylistSection('westerosRadioGrid', musicData.playlists.westerosRadio);
}

function renderPlaylistSection(containerId, playlists) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    playlists.forEach(pl => {
    const card = createCard({
        image: pl.image,
        title: pl.name,
        subtitle: pl.desc,
        onClick: () => playPlaylist(pl)
    });
    container.appendChild(card);
    });
}

function renderPlaylists() {
    const container = document.getElementById('playlistsList');
    container.innerHTML = '';
    
    const allPlaylists = [
    ...musicData.playlists.madeForYou,
    ...musicData.playlists.recentlyPlayed,
    ...(musicData.playlists.custom || [])
    ];
    
    allPlaylists.slice(0, 10).forEach(pl => {
    const el = document.createElement('div');
    el.className = 'playlist-item';
    if (currentPlaylist && currentPlaylist.id === pl.id) el.classList.add('active');
    el.innerHTML = `
        <div class="playlist-img" style="background-image:url(${pl.image || ''})"></div>
        <div>
        <div class="playlist-name">${pl.name}</div>
        <div class="playlist-type">${pl.desc || 'Playlist'}</div>
        </div>
    `;
    el.onclick = () => playPlaylist(pl);
    container.appendChild(el);
    });
}

function renderHouses() {
    const container = document.getElementById('housesGrid');
    container.innerHTML = '';
    musicData.houses.forEach(h => {
    const card = createCard({
        image: h.img,
        title: h.name,
        subtitle: h.subtitle,
        onClick: () => showToast(`${h.name} selected`)
    });
    container.appendChild(card);
    });
}

function renderCharacters() {
    const container = document.getElementById('charactersGrid');
    container.innerHTML = '';
    musicData.characters.forEach(c => {
    const card = createCard({
        image: c.img,
        title: c.name,
        subtitle: c.subtitle,
        round: true,
        onClick: () => showToast(`${c.name}: ${c.subtitle}`)
    });
    container.appendChild(card);
    });
}

function renderEpisodes() {
    const s1 = document.getElementById('season1Grid');
    const s8 = document.getElementById('season8Grid');
    s1.innerHTML = '';
    s8.innerHTML = '';
    
    musicData.episodes.season1.forEach(ep => {
    s1.appendChild(createCard({
        icon: ep.icon,
        title: ep.title,
        subtitle: `${ep.episode} • ${ep.duration}`,
        onClick: () => showToast(`Playing ${ep.title}`)
    }));
    });
    
    musicData.episodes.season8.forEach(ep => {
    s8.appendChild(createCard({
        icon: ep.icon,
        title: ep.title,
        subtitle: `${ep.episode} • ${ep.duration}`,
        onClick: () => showToast(`Playing ${ep.title}`)
    }));
    });
}

function createCard({ icon, title, subtitle, image, round, onClick }) {
    const card = document.createElement('div');
    card.className = 'card';
    const imgClass = round ? 'card-img round' : 'card-img';
    const bgStyle = image ? `background-image:url(${image})` : `background:linear-gradient(135deg,var(--house-color),var(--primary-dark))`;
    card.innerHTML = `
    <div class="${imgClass}" style="${bgStyle}">
        ${!image ? (icon || '') : ''}
        <button class="play-btn" onclick="event.stopPropagation()">▶</button>
    </div>
    <div class="card-title">${title}</div>
    <div class="card-subtitle">${subtitle}</div>
    `;
    card.onclick = onClick;
    return card;
}

function playPlaylist(pl) {
    if (!pl || !pl.tracks || !pl.tracks.length) {
    showToast('Playlist is empty');
    return;
    }
    currentPlaylist = pl;
    currentTrackIndex = 0;
    playTrackById(pl.tracks[0]);
    renderPlaylists();
}

function playTrackById(trackId) {
    const track = musicData.tracks[trackId];
    if (!track) {
    showToast('Track not found');
    return;
    }
    currentTrack = track;
    
    // Update UI
    const img = document.getElementById('playerImg');
    img.style.backgroundImage = '';
    img.innerHTML = `${track.icon}<div class="equalizer" id="equalizer" style="display:none"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>`;
    document.getElementById('playerTitle').textContent = track.title;
    document.getElementById('playerArtist').textContent = track.artist;
    document.getElementById('totalTime').textContent = formatTime(track.duration);
    
    // Simulate playback (no actual audio file)
    audio.src = track.src || '';
    audio.currentTime = 0;
    
    startPlayback();
    loadLyrics(trackId);
    showToast(`Now playing: ${track.title}`);
    
    // Mark playing cards
    document.querySelectorAll('.card').forEach(c => c.classList.remove('playing'));
}

function startPlayback() {
    isPlaying = true;
    document.getElementById('playPauseBtn').textContent = '⏸';
    document.getElementById('playerImg').classList.add('playing');
    document.getElementById('equalizer').style.display = 'flex';
    startProgressSimulation();
}

function stopPlayback() {
    isPlaying = false;
    document.getElementById('playPauseBtn').textContent = '▶';
    document.getElementById('playerImg').classList.remove('playing');
    document.getElementById('equalizer').style.display = 'none';
    stopProgressSimulation();
}

function togglePlayPause() {
    if (!currentTrack) {
    showToast('Select a song to play');
    return;
    }
    if (isPlaying) {
    stopPlayback();
    } else {
    startPlayback();
    }
}

function previousTrack() {
    if (!currentPlaylist || currentTrackIndex <= 0) {
    audio.currentTime = 0;
    updateProgress();
    return;
    }
    currentTrackIndex--;
    playTrackById(currentPlaylist.tracks[currentTrackIndex]);
}

function nextTrack() {
    if (!currentPlaylist || currentTrackIndex >= currentPlaylist.tracks.length - 1) {
    if (repeatMode === 1) {
        currentTrackIndex = 0;
        playTrackById(currentPlaylist.tracks[currentTrackIndex]);
    } else {
        stopPlayback();
    }
    return;
    }
    currentTrackIndex++;
    playTrackById(currentPlaylist.tracks[currentTrackIndex]);
}

function onTrackEnded() {
    if (repeatMode === 2) {
    audio.currentTime = 0;
    startPlayback();
    } else {
    nextTrack();
    }
}

 
function startProgressSimulation() {
    stopProgressSimulation();
    progressUpdateInterval = setInterval(() => {
    if (!isPlaying || !currentTrack) return;
    audio.currentTime = Math.min(audio.currentTime + 0.25, currentTrack.duration);
    updateProgress();
    if (audio.currentTime >= currentTrack.duration) {
        onTrackEnded();
    }
    }, 250);
}

function stopProgressSimulation() {
    if (progressUpdateInterval) {
    clearInterval(progressUpdateInterval);
    progressUpdateInterval = null;
    }
}

function updateProgress() {
    if (!currentTrack) return;
    const current = audio.currentTime || 0;
    const duration = currentTrack.duration || 1;
    const percent = (current / duration) * 100;
    document.getElementById('currentTime').textContent = formatTime(current);
    document.getElementById('progressFill').style.width = percent + '%';
}

function seekTrack(e) {
    if (!currentTrack) return;
    const bar = e.currentTarget.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - bar.left) / bar.width));
    audio.currentTime = percent * currentTrack.duration;
    updateProgress();
}

function formatTime(sec) {
    sec = Math.floor(sec);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

 
function toggleShuffle() {
    isShuffled = !isShuffled;
    const btn = document.getElementById('shuffleBtn');
    btn.classList.toggle('active', isShuffled);
    showToast(isShuffled ? 'Shuffle on' : 'Shuffle off');
}

function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    const btn = document.getElementById('repeatBtn');
    btn.classList.toggle('active', repeatMode > 0);
    const modes = ['Repeat off', 'Repeat all', 'Repeat one'];
    showToast(modes[repeatMode]);
}

function toggleLike() {
    isLiked = !isLiked;
    document.getElementById('likeBtn').textContent = isLiked ? '♥' : '♡';
    document.getElementById('likeBtn').classList.toggle('active', isLiked);
    showToast(isLiked ? 'Added to Liked Songs' : 'Removed from Liked Songs');
}

function changeVolume(e) {
    const bar = e.currentTarget.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - bar.left) / bar.width));
    volume = percent;
    audio.volume = volume;
    document.getElementById('volumeFill').style.width = (percent * 100) + '%';
    updateVolumeIcon();
}

function toggleMute() {
    isMuted = !isMuted;
    audio.muted = isMuted;
    updateVolumeIcon();
}

function updateVolumeIcon() {
    const btn = document.getElementById('volumeBtn');
    btn.textContent = (isMuted || volume === 0) ? '🔇' : volume < 0.5 ? '🔉' : '🔊';
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    } else {
    document.exitFullscreen();
    }
}

 
function loadLyrics(trackId) {
    const lyrics = musicData.lyrics[trackId] || [];
    const container = document.getElementById('lyricsContent');
    container.innerHTML = '';
    if (lyrics.length === 0) {
    container.innerHTML = '<div class="lyrics-line" style="color:#666">No lyrics available</div>';
    return;
    }
    lyrics.forEach((line, i) => {
    const div = document.createElement('div');
    div.className = 'lyrics-line';
    div.dataset.index = i;
    div.textContent = line.text;
    container.appendChild(div);
    });
}

function toggleLyrics() {
    showingLyrics = !showingLyrics;
    document.getElementById('lyricsPanel').classList.toggle('show', showingLyrics);
}

 
function selectHouse(house, silent = false) {
    currentHouse = house;
    document.body.className = 'house-' + house;
    document.querySelectorAll('.house-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.house === house);
    });
    localStorage.setItem('selectedHouse', house);
    if (!silent) {
    const houseData = musicData.houses.find(h => h.id === house);
    showToast(`House ${houseData ? houseData.name : house} selected`);
    }
}

 
function switchView(view) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    event.target.classList.add('active');
    
    const views = ['homeView', 'searchView', 'episodesView', 'housesView', 'charactersView'];
    views.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.style.display = 'none';
    });
    
    const viewEl = document.getElementById(view + 'View');
    if (viewEl) viewEl.style.display = 'block';
    
    document.getElementById('mainContent').scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    showToast('Back');
}

function goForward() {
    showToast('Forward');
}

function goHome() {
    switchView('home');
    document.getElementById('mainContent').scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
}

 
function handleSearch(query) {
    if (!query.trim()) return;
    showToast(`Searching: ${query}`);
    // Implement search functionality here
}

 
function showCreatePlaylistModal() {
    document.getElementById('playlistModal').classList.add('show');
}

function hideCreatePlaylistModal() {
    document.getElementById('playlistModal').classList.remove('show');
    document.getElementById('playlistName').value = '';
    document.getElementById('playlistDesc').value = '';
}

function createPlaylist(e) {
    e.preventDefault();
    const name = document.getElementById('playlistName').value.trim();
    const desc = document.getElementById('playlistDesc').value.trim();
    if (!name) return;
    
    const newPlaylist = {
    id: 'pl_' + Date.now(),
    name,
    desc,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    tracks: []
    };
    
    if (!musicData.playlists.custom) musicData.playlists.custom = [];
    musicData.playlists.custom.push(newPlaylist);
    
    localStorage.setItem('westerosPlaylists', JSON.stringify(musicData.playlists.custom));
    
    renderPlaylists();
    hideCreatePlaylistModal();
    showToast(`Playlist "${name}" created`);
}

 
function showToast(text) {
    const toast = document.getElementById('toast');
    const textEl = document.getElementById('toastText');
    textEl.textContent = text;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
    }, 2000);
}