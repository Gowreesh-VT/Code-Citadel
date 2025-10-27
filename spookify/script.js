const musicData = {
    playlists: {
    madeForYou: [
        {
        id: 'daily-mix-1',
        name: 'Daily Mix 1',
        desc: 'Game of Thrones, Ramin Djawadi, and more',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'beer-song','beep-song', 'chaleya', 'yendi-vitu-pona', 'kesariya', 'salambala', 'soi-soi', 'lungi-dance', 'donu-donu']
        },
        {
        id: 'discover-weekly',
        name: 'Discover Weekly',
        desc: 'Your weekly mixtape of fresh music',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
        tracks: ['yendi-vitu-pona', 'soi-soi', 'beep-song']
        },
        {
        id: 'release-radar',
        name: 'Release Radar',
        desc: 'New music from Westeros',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        tracks: ['lungi-dance', 'salambala', 'donu-donu']
        },
        {
        id: 'on-repeat',
        name: 'On Repeat',
        desc: 'Your most played songs',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'beer-song', 'yendi-vitu-pona']
        },
        {
        id: 'repeat-rewind',
        name: 'Repeat Rewind',
        desc: 'Songs you loved and forgot about',
        image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        tracks: ['chaleya', 'kesariya', 'beep-song']
        },
        {
        id: 'time-capsule',
        name: 'Your Time Capsule',
        desc: 'We made you a personalized playlist',
        image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop',
        tracks: ['soi-soi', 'salambala', 'lungi-dance']
        }
    ],
    madeForDaenerys: [
        {
        id: 'daenerys-mix',
        name: 'Daenerys Daily Mix',
        desc: 'Fire and Blood themed',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
        tracks: ['soi-soi', 'beep-song', 'lungi-dance']
        },
        {
        id: 'dragon-songs',
        name: 'Dragon Songs',
        desc: 'Epic dragon themes',
        image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=400&fit=crop',
        tracks: ['beep-song', 'lungi-dance', 'soi-soi']
        },
        {
        id: 'mother-of-dragons',
        name: 'Mother of Dragons',
        desc: 'Khaleesi\'s journey',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop',
        tracks: ['soi-soi', 'oorum-blood', 'beep-song']
        },
        {
        id: 'fire-and-blood',
        name: 'Fire and Blood',
        desc: 'House Targaryen anthology',
        image: 'https://images.unsplash.com/photo-1604076984203-587c92ab2e58?w=400&h=400&fit=crop',
        tracks: ['lungi-dance', 'soi-soi', 'beep-song']
        },
        {
        id: 'breaker-of-chains',
        name: 'Breaker of Chains',
        desc: 'Liberation anthems',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        tracks: ['soi-soi', 'beep-song', 'oorum-blood']
        },
        {
        id: 'dothraki-sea',
        name: 'Across the Dothraki Sea',
        desc: 'Eastern melodies',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        tracks: ['soi-soi', 'lungi-dance', 'beep-song']
        }
    ],
    madeForJon: [
        {
        id: 'jon-mix',
        name: 'Jon Snow Daily Mix',
        desc: 'The North Remembers',
        image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&h=400&fit=crop',
        tracks: ['yendi-vitu-pona', 'salambala', 'donu-donu']
        },
        {
        id: 'nights-watch',
        name: 'Night\'s Watch',
        desc: 'Songs of the Wall',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop',
        tracks: ['salambala', 'donu-donu', 'yendi-vitu-pona']
        },
        {
        id: 'king-in-north',
        name: 'King in the North',
        desc: 'Northern anthems',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        tracks: ['yendi-vitu-pona', 'oorum-blood', 'salambala']
        },
        {
        id: 'winter-is-coming',
        name: 'Winter Is Coming',
        desc: 'Stark family themes',
        image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=400&h=400&fit=crop',
        tracks: ['donu-donu', 'yendi-vitu-pona', 'kesariya']
        },
        {
        id: 'wolf-and-dragon',
        name: 'Wolf and Dragon',
        desc: 'Jon & Daenerys',
        image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=400&fit=crop',
        tracks: ['yendi-vitu-pona', 'soi-soi', 'oorum-blood']
        },
        {
        id: 'white-wolf',
        name: 'The White Wolf',
        desc: 'Jon\'s journey',
        image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=400&h=400&fit=crop',
        tracks: ['salambala', 'yendi-vitu-pona', 'donu-donu']
        }
    ],
    recentlyPlayed: [
        {
        id: 'got-main',
        name: 'GOT Main Themes',
        desc: 'Epic soundtracks',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'beer-song', 'chaleya']
        },
        {
        id: 'house-stark',
        name: 'House Stark',
        desc: 'Winter is Coming',
        image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=400&fit=crop',
        tracks: ['yendi-vitu-pona', 'kesariya', 'salambala']
        },
        {
        id: 'epic-battles',
        name: 'Epic Battles',
        desc: 'War soundtracks',
        image: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'beer-song', 'yendi-vitu-pona']
        },
        {
        id: 'orchestral-got',
        name: 'Orchestral GOT',
        desc: 'Full orchestra versions',
        image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'soi-soi', 'beer-song']
        },
        {
        id: 'piano-covers',
        name: 'Piano Covers',
        desc: 'Beautiful piano arrangements',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=400&fit=crop',
        tracks: ['beer-song', 'chaleya', 'yendi-vitu-pona']
        },
        {
        id: 'emotional-moments',
        name: 'Emotional Moments',
        desc: 'Heart-touching themes',
        image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop',
        tracks: ['kesariya', 'chaleya', 'donu-donu']
        }
    ],
    westerosRadio: [
        {
        id: 'got-radio',
        name: 'GOT Radio',
        desc: 'Based on your taste',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'yendi-vitu-pona', 'soi-soi']
        },
        {
        id: 'ramin-djawadi-radio',
        name: 'Ramin Djawadi Radio',
        desc: 'Composer spotlight',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'beer-song', 'chaleya']
        },
        {
        id: 'fantasy-radio',
        name: 'Fantasy Radio',
        desc: 'Epic fantasy soundtracks',
        image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'soi-soi', 'lungi-dance']
        },
        {
        id: 'medieval-radio',
        name: 'Medieval Radio',
        desc: 'Medieval & folk',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        tracks: ['chaleya', 'yendi-vitu-pona', 'donu-donu']
        },
        {
        id: 'cinematic-radio',
        name: 'Cinematic Radio',
        desc: 'Epic cinematic music',
        image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'beer-song', 'lungi-dance']
        },
        {
        id: 'battle-radio',
        name: 'Battle Radio',
        desc: 'War drums & intense themes',
        image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=400&fit=crop',
        tracks: ['oorum-blood', 'yendi-vitu-pona', 'soi-soi']
        }
    ]
    },
    tracks: {
    'oorum-blood': { id: 'oorum-blood', title: 'Oorum Blood', artist: 'Ramin Djawadi', duration: 225, icon: '🐉', src: 'songs/Oorum Blood.mp3' },
    'beer-song': { id: 'beer-song', title: 'Beer Song', artist: 'Ramin Djawadi', duration: 600, icon: '🎹', src: 'songs/Beer song.mp3' },
    'chaleya': { id: 'chaleya', title: 'Chaleya', artist: 'Ramin Djawadi', duration: 280, icon: '🦁', src: 'songs/Chaleya.mp3' },
    'yendi-vitu-pona': { id: 'yendi-vitu-pona', title: 'Yendi Vitu Pona', artist: 'Ramin Djawadi', duration: 240, icon: '🐺', src: 'songs/YVP.mp3' },
    'kesariya': { id: 'kesariya', title: 'Kesariya', artist: 'Ramin Djawadi', duration: 195, icon: '❄️', src: 'songs/Kesariya.mp3' },
    'salambala': { id: 'salambala', title: 'Salambala', artist: 'Ramin Djawadi', duration: 210, icon: '⚔️', src: 'songs/Salambala.mp3' },
    'soi-soi': { id: 'soi-soi', title: 'Soi Soi', artist: 'Ramin Djawadi', duration: 180, icon: '🐉', src: 'songs/Soi-Soi.mp3' },
    'beep-song': { id: 'beep-song', title: 'Beep Song', artist: 'Ramin Djawadi', duration: 165, icon: '🔥', src: 'songs/beep song.mp3' },
    'lungi-dance': { id: 'lungi-dance', title: 'Lungi Dance', artist: 'Ramin Djawadi', duration: 320, icon: '🐲', src: 'songs/Lungi Dance.mp3' },
    'donu-donu': { id: 'donu-donu', title: 'Donu Donu', artist: 'Ramin Djawadi', duration: 198, icon: '🏰', src: 'songs/Donu Donu.mp3' }
    },
    houses: [
    { id: 'stark', icon: '🐺', name: 'House Stark', subtitle: 'Winter is Coming', img: 'images/houses/Stark.webp' },
    { id: 'lannister', icon: '🦁', name: 'House Lannister', subtitle: 'Hear Me Roar', img: 'images/houses/Lannister.webp' },
    { id: 'targaryen', icon: '🐉', name: 'House Targaryen', subtitle: 'Fire and Blood', img: 'images/houses/targaryen.webp' },
    { id: 'tyrell', icon: '🌹', name: 'House Tyrell', subtitle: 'Growing Strong', img: 'images/houses/Tyrell.jpg' },
    { id: 'baratheon', icon: '🦌', name: 'House Baratheon', subtitle: 'Ours is the Fury', img: 'images/houses/Baratheon.webp' },
    { id: 'greyjoy', icon: '🐙', name: 'House Greyjoy', subtitle: 'We Do Not Sow', img: 'images/houses/Greyjoy.webp' }
    ],
    characters: [
    { id: 'jon', icon: '🐺', name: 'Jon Snow', subtitle: 'King in the North', img: 'images/characters/jon.jpg' },
    { id: 'daenerys', icon: '🐉', name: 'Daenerys Targaryen', subtitle: 'Mother of Dragons', img: 'images/characters/daenerys.jpg' },
    { id: 'tyrion', icon: '🦁', name: 'Tyrion Lannister', subtitle: 'The Halfman', img: 'images/characters/tyrion.jpg' },
    { id: 'arya', icon: '⚔️', name: 'Arya Stark', subtitle: 'No One', img: 'images/characters/arya.jpg' },
    { id: 'cersei', icon: '👑', name: 'Cersei Lannister', subtitle: 'Queen Regent', img: 'images/characters/cersei.jpg' },
    { id: 'jaime', icon: '🗡️', name: 'Jaime Lannister', subtitle: 'Kingslayer', img: 'images/characters/jaime.jpg' },
    { id: 'sansa', icon: '🦅', name: 'Sansa Stark', subtitle: 'Lady of Winterfell', img: 'images/characters/sansa.jpg' },
    { id: 'brienne', icon: '🦉', name: 'Brienne of Tarth', subtitle: 'Sworn Sword', img: 'images/characters/brienne.jpg' }
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
    'oorum-blood': [
        { time: 0, text: 'Alaiye alaiye kaattula mazhaiye' },
        { time: 5, text: 'Allalley alla Dude' },
        { time: 10, text: 'Sethara Pathara uduvan na' },
        { time: 15, text: 'Othara Allalley alla Dude' },
        { time: 20, text: 'Oorum Bloodu' },
        { time: 25, text: '10000 Aura va kondu' },
        { time: 30, text: 'Achchadu' },
        { time: 35, text: 'Nee ethanaiyo varuthangala paatha' },
        { time: 40, text: 'Athanaiyum worth nu thaan aakka' },
        { time: 45, text: 'Dude\'u unna minjinavan yaarum illa' },
        { time: 50, text: 'Rs 1 Trial' },
        { time: 55, text: 'Senjiru vachi' },
        { time: 60, text: 'Just another person nu paathaa' },
        { time: 65, text: 'ilichivan laa History ya kettaa' },
        { time: 70, text: 'Mannan naa vanthana oor alara' },
        { time: 75, text: 'Kannan naa thottanna poo malara' },
        { time: 80, text: 'Ennenenna solla Enna vella yaarum illa' },
        { time: 85, text: 'Raajathi Raajan naa' },
        { time: 90, text: 'Raw\'vaana' },
        { time: 95, text: 'Unna thaana paathuka Naa inga kaathiruken' },
        { time: 100, text: 'Yen Nenji yengiruka' },
        { time: 105, text: 'Una paakka vaanatha Thaandiyum vandhu en Kaadhala kaamipen naa naa naa' },
        { time: 110, text: 'Yen moochavan Pechavan' },
        { time: 115, text: 'Per solum azhagavan Yenakkula kalakkura' },
        { time: 120, text: 'Oxygen alavavan' },
        { time: 125, text: 'Yaar Avan Yaar Avan' },
        { time: 130, text: 'Oor solum Star Avan' },
        { time: 135, text: 'Avan than Ennavanaa' },
        { time: 140, text: 'Oru Alai Avan' },
        { time: 145, text: 'Kalai Avan' },
        { time: 150, text: 'Azhagiya Nilavavan' },
        { time: 155, text: 'Nizalilum jolikkira' },
        { time: 160, text: 'Niranthara oli avan' },
        { time: 165, text: 'Sari avan' },
        { time: 170, text: 'Thavaravan' },
        { time: 175, text: 'Sirikira siripukku' },
        { time: 180, text: 'Avanthaan kaaranamaa' },
        { time: 185, text: 'Mannan naa vanthanaa oor alara' },
        { time: 190, text: 'Kannan naa thottannaa poo malara' },
        { time: 195, text: 'Ennenenna solla' },
        { time: 200, text: 'Enna vella yaarum illa' },
        { time: 205, text: 'Raajathi Raajan naa' },
        { time: 210, text: 'Raw\'vaana Raavana' },
        { time: 215, text: 'Thotta Dei Pattasa' },
        { time: 220, text: 'naa vedikira 10000 wala hey!' },
        { time: 225, text: 'Sutta Dei bullet ah' },
        { time: 230, text: 'Naa therikira chal thu kon ye sala!' },
        { time: 235, text: 'I\'m just chilling Aaya Cool ah!' },
        { time: 240, text: 'Aya hooo! Proper style Ah' },
        { time: 245, text: 'Odra gaali' },
        { time: 250, text: 'Naa podra velila la close Right ah Tight ah kudukuran pose' },
        { time: 255, text: 'Mannan naa vanthana oor alara' },
        { time: 260, text: 'Kannan naa thottanna poo malara' },
        { time: 265, text: 'Ennenenna solla' },
        { time: 270, text: 'Enna vella yaarum illa' },
        { time: 275, text: 'Raajathi Raajan na' },
        { time: 280, text: 'Raw\'vaana Raavanaa' }
    ],
    'beer-song': [
        { time: 1, text: 'Male : Pacha kuthithikinae unoda pera' },
        { time: 2, text: 'Valiyila kudichendi 10,000 beer-uh' },
        { time: 5, text: 'Pacha kuthithikinae unoda pera' },
        { time: 10, text: 'Valiyila kudichendi 10,000 beer-uh' },
        { time: 20, text: 'Male : Unoda irukanum' },
        { time: 30, text: 'Ulagatha marakanum' },
        { time: 37, text: 'Unoda irukanu naan' },
        { time: 45, text: 'Ulagatha marakanum' },
        { time: 50, text: 'Male : Enoda kolandha uh' },
        { time: 55, text: 'Vaithula porakkanu' },
        { time: 60, text: 'Enoda kolandha un' },
        { time: 65, text: 'Vaithula porakkanum' },
        { time: 70, text: 'Male : Naa kadalumela medhakuren' },
        { time: 75, text: 'Nee aagayathula parakura' },
        { time: 80, text: 'Naa kadalumela medhakuren' },
        { time: 85, text: 'Nee aagayathula parakura' },
        { time: 90, text: 'Male : Maththi meena aaiyura' },
        { time: 95, text: 'Uppu meena kaaiyura' },
        { time: 100, text: 'Kannala dhaa enna oothi' },
        { time: 105, text: 'Enna varukura' },
        { time: 110, text: 'Male : Vaala meena minukkura' },
        { time: 115, text: 'Kaara podiya sirikkura' },
        { time: 120, text: 'Mundhaanaiyil thimingalatha' },
        { time: 125, text: 'Neeyum pudikura' },
        { time: 130, text: 'Male : Nangoorama erangura' },
        { time: 135, text: 'Eluvu valaya elukura' },
        { time: 140, text: 'Yemmadi yemmadi' },
        { time: 145, text: 'Unaala naa thudikuren' },
        { time: 150, text: 'Chorus : Mmm…' },
        { time: 155, text: 'Haa…haa… ha' },
        { time: 160, text: 'Haa…haa…ha' },
        { time: 165, text: 'Aahaaahahaaa…' },
        { time: 170, text: 'Chorus : Mmm…' },
        { time: 175, text: 'Haa…haa…ha' },
        { time: 180, text: 'Haa…haa…ha' },
        { time: 185, text: 'Ooohoooo… oh… oh…' },
        { time: 190, text: 'Male : Pacha kuthithikinae unoda pera' },
        { time: 195, text: 'Valiyila kudichendi 10,000 beer-uh' },
        { time: 200, text: 'Pacha kuthithikinae unoda pera' },
        { time: 205, text: 'Valiyila kudichendi 10,000 beer-uh' },
        { time: 210, text: 'Male : Unoda irukanum' },
        { time: 215, text: 'Ulagatha marakanum' },
        { time: 220, text: 'Unoda irukanu naan' },
        { time: 225, text: 'Ulagatha marakanum' },
        { time: 230, text: 'Male : Enoda kolandha un' },
        { time: 235, text: 'Vaithula porakkanu' },
        { time: 240, text: 'Enoda kolandha un' },
        { time: 245, text: 'Vaithula porakkanum' },
        { time: 250, text: 'Male : Naa kadalumela medhakurae' },
        { time: 255, text: 'Nee aagayathula parakura' },
        { time: 260, text: 'Naa kadalumela medhakurae' },
        { time: 265, text: 'Nee aagayathula parakura' },
        { time: 270, text: 'Chorus : Mmm…' },
        { time: 275, text: 'Haa… haa…ha' },
        { time: 280, text: 'Male : Ammu kuttiyae' },
        { time: 285, text: 'Chorus : Haa… haa…ha' },
        { time: 290, text: 'Male : Pattu kuttiyae' },
        { time: 295, text: 'Chorus : Aahaaahaahaaa…' },
        { time: 300, text: 'Chorus : Mmm…' },
        { time: 305, text: 'Haa…haa…ha' },
        { time: 310, text: 'Male : Thanga kattiyae' },
        { time: 315, text: 'Chorus : Haa… haa…ha' },
        { time: 320, text: 'Male : Mayakittiyae' },
        { time: 325, text: 'Chorus : Ooohoooo… oh… oh…' },
        { time: 330, text: 'Mmm..' }
    ],
    'chaleya': [
        { time: 0, text: 'Ishq Mein Dil Bana Hai' },
        { time: 2, text: 'Ishq Mein Dil Fanna Hai Ho' },
        { time: 5, text: 'Mita De Ya Bana De Maine Tujhko Chuna Hai Ho Ho' },
        { time: 10, text: 'Tere Saare Rang Odh Ke Dhang Odh Ke Tera Hua Main Sabko Chhod Ke Ho Ho Ho Ishq Ni Karna Naap Tol Ke Raaj Khol Ke Aaya Hoon Main Sabko Bol Ke Ho' },
        { time: 15, text: 'Oh Main Taan Chaleya Teri Oar Tera Chaleya Hai Zor Tera Hoya Main Yaar Ve Bhuleya Ae Sansaar Ve' },
        { time: 20, text: 'Chaleya Teri Oar Tera Chaleya Hai Zor Tera Hoya Main Yaar Ve Bhuleya Ae Sansaar Ve' },
        { time: 25, text: 'Jag Tere Liye Chhodiya Dil Tere Sang Jodiya Ab Tera Main Toh Ho Gaya Paa Ke Tujhe Main Kho Gaya' },
        { time: 30, text: 'Jag Tere Liye Chhodiya Dil Tere Sang Jodiya Ab Tera Main Toh Ho Gaya Paa Ke Tujhe Main Kho Gaya Kho Gaya Haan' },
        { time: 35, text: 'Ishq Mein Dil Bana Hai Ishq Mein Dil Fanna Hai Ho Ho Ho Ho' },
        { time: 40, text: 'Hansa De Ya Rula De Maine Tujhko Chuna Hai Oh Oh Ho Ho' },
        { time: 45, text: 'Duniya Kehti Ishq Bhool Hai Befizool Hai Humko Toh Dil Se Kubool Hai Oh Oh Ho Ho' },
        { time: 50, text: 'Rs 1 Trial' },
        { time: 55, text: 'Tujhme Dikhta Rabb Ka Noor Hai Ek Suroor Hai Tu Hai Apna Yeh Guroor Hai Oh Oh Oh Ho' },
        { time: 60, text: 'Ve Main Taan Chaliya Teri Oar Tera Chaleya Hai Zor Teri Hoyi Main Yaar Ve Bhuleya Ae Sansar Ve' },
        { time: 65, text: 'Chaleya Teri Oar Tera Chaleya Hai Zor Teri Hoyi Main Yaar Ve Bhuleya Ae Sansar Ve' },
        { time: 70, text: 'Tu Ishq-e-Khwab Khwaab Sa Hai Mera Behisaab Sa Hai Tere Labb Choom Loon Main Urdu Ki Kitaab Sa Hai' },
        { time: 75, text: 'Ishq-e-Khwab Khwaab Sa Hai Mera Behisaab Sa Hai Tere Labb Choom Loon Main Urdu Ki Kitaab Sa Hai' },
        { time: 80, text: 'Jag Tere Liye Chhodiya Ishq Mein Dil Fanna Hai Dil Tere Sang Jodiya Ishq Mein Dil Fanna Hai Ho Ho' },
        { time: 85, text: 'Ab Tera Main Toh Ho Gaya Paa Ke Tujhe Main Kho Gaya Jag Tere Liye Chhodiya Mita De Ya Bana De' },
        { time: 90, text: 'Dil Tere Sang Jodiya Maine Tujhko Chuna Hai Ho Ho Paa Ke Tujhe Main Kho Gaya Kho Gaya Haan' }
    ],
    'kesariya': [
        { time: 0, text: 'Mujhko Itna Bataye Koyi' },
        { time: 5, text: 'Kaise Tujhse Dil Na Lagaye Koyi' },
        { time: 10, text: 'Rabba Ne Tujhko Banane Mein' },
        { time: 15, text: 'Kardi Hai Husn Ki Khaali Tijoriyan' },
        { time: 20, text: 'Kajal Ki Siyahi Se Likhi' },
        { time: 25, text: 'Hai Tune Jaane' },
        { time: 30, text: 'Kitno Ki Love Story\'an' },
        { time: 35, text: 'Kesariya Tera Ishq Hai Piya' },
        { time: 40, text: 'Rang Jaaun Jo Main Hath Lagaun' },
        { time: 45, text: 'Din Beete Saara Teri Fikr Mein' },
        { time: 50, text: 'Rs 1 Trial' },
        { time: 55, text: 'Rain Saari Teri Khair Manaun' },
        { time: 60, text: 'Kesariya Tera Ishq Hai Piya' },
        { time: 65, text: 'Rang Jaaun Jo Main Hath Lagaun' },
        { time: 70, text: 'Din Beete Saara Teri Fikr Mein' },
        { time: 75, text: 'Rain Saari Teri Khair Manaun' },
        { time: 80, text: 'Patjhad Ke Mausam Mein Bhi' },
        { time: 85, text: 'Rangi Chanaron Jaisi' },
        { time: 90, text: 'Jhanke Sannnaton Mein Tu' },
        { time: 95, text: 'Veena Ke Taaron Jaisi' },
        { time: 100, text: 'Hmm Sadiyon Se Bhi Lambi Yeh' },
        { time: 105, text: 'Mann Ki Amavasein Hain' },
        { time: 110, text: 'Aur Tu Phuljhadiyon Wale' },
        { time: 115, text: 'Tyoharon Jaisi' },
        { time: 120, text: 'Chanda Bhi Deewana Hai Tera' },
        { time: 125, text: 'Jalti Hai Tujhse' },
        { time: 130, text: 'Saari Chhakoriyan' },
        { time: 135, text: 'Kajal Ki Siyahi Se Likhi' },
        { time: 140, text: 'Hai Tune Jaane' },
        { time: 145, text: 'Kitno Ki Love Story\'an' },
        { time: 150, text: 'Kesariya Tera Ishq Hai Piya' },
        { time: 155, text: 'Rang Jaaun Jo Main Hath Lagaun' },
        { time: 160, text: 'Din Beete Saara Teri Fikr Mein' },
        { time: 165, text: 'Rain Saari Teri Khair Manaun' },
        { time: 170, text: 'Kesariya Tera Ishq Hai Piya' },
        { time: 175, text: 'Rang Jaaun Jo Main Hath Lagaun' },
        { time: 180, text: 'Din Beete Saara Teri Fikr Mein' },
        { time: 185, text: 'Rain Saari Teri Khair Manaun' },
        { time: 190, text: 'Kesariya Tera Ishq Hai Piya' },
        { time: 195, text: 'Ishq Hai Piya' },
        { time: 200, text: 'Kesariya Tera Ishq Hai Piya' },
        { time: 205, text: 'Ishq Hai Piya' },
        { time: 210, text: 'Piya Ishq Hai Piya' },
        { time: 215, text: 'Ishq Hai Piya' },
        { time: 220, text: 'Kesariya Tera Ishq Hai Piya' },
        { time: 225, text: 'Rang Jaaun Jo Main Hath Lagaun' }
    ],
    'salambala': [
        { time: 0, text: 'Male : Salambala salambala' },
        { time: 5, text: 'Adiyae gangamma' },
        { time: 10, text: 'Veruppula sirikiren honeyee' },
        { time: 15, text: 'Male : What… then Beat..' },
        { time: 20, text: 'Male : Salambala salambala' },
        { time: 25, text: 'Adiyae gangamma' },
        { time: 30, text: 'Veruppula sirikkiren honeyee' },
        { time: 35, text: 'Male : Naanum polambala' },
        { time: 40, text: 'Polambala inimae naa bangamma' },
        { time: 45, text: 'Kalathula gelikiren thaniyae' },
        { time: 50, text: 'Male : Kelambu kaathu varattum' },
        { time: 55, text: 'Heartukku dhaa break vuttum' },
        { time: 60, text: 'Pattumattum maatikkichae vibe ah' },
        { time: 65, text: 'Male : Polamba night mattum' },
        { time: 70, text: 'Muzhchikitta nextuu kattam' },
        { time: 75, text: 'Kootam mattum suthikichae tribe ahh' },
        { time: 80, text: 'Male : Purse-eh michamilla' },
        { time: 85, text: 'G-pay vachadhilla' },
        { time: 90, text: 'Manasa mattum dhanthen bribe ah' },
        { time: 95, text: 'Male : Perusa buildup illa' },
        { time: 100, text: 'Friendsa nenachadhilla' },
        { time: 105, text: 'Loves mattum sonnen hype ah' },
        { time: 110, text: 'Male : Ippo salambala salambala' },
        { time: 115, text: 'Adiyae gangamma' },
        { time: 120, text: 'Veruppula sirikkiren honeyee' },
        { time: 125, text: 'Male : Naanum polambala' },
        { time: 130, text: 'Polambala inimae naa bangamma' },
        { time: 135, text: 'Kalathula gelikiren thaniyae' },
        { time: 140, text: 'Male : Ini rashmika vandhaalum' },
        { time: 145, text: 'Zendaya -va ninnaalum' },
        { time: 150, text: 'Thirumbi paakka kooda maatenae' },
        { time: 155, text: 'Male : Enna pookie-nu sonnaalum' },
        { time: 160, text: 'Thaakki vuttu ponaalum' },
        { time: 165, text: 'Raakki katta solli keppenae' },
        { time: 170, text: 'Male : Target-tu fix-u' },
        { time: 175, text: 'Thevai ella chicks-u' },
        { time: 180, text: 'Move on panna dhan' },
        { time: 185, text: 'Pakka flex-u' },
        { time: 190, text: 'Male : Market-u peruse' },
        { time: 195, text: 'Mic-set pudhusu' },
        { time: 200, text: 'Talenta kaatina dhaan' },
        { time: 205, text: 'Nilaikkum purse-u' },
        { time: 210, text: 'Male : Poduu' },
        { time: 215, text: 'Male : Purse-eh michamilla' },
        { time: 220, text: 'G-pay vachadhilla' },
        { time: 225, text: 'Manasa mattum dhanthen bribe ah' },
        { time: 230, text: 'Male : Perusa buildup illa' },
        { time: 235, text: 'Friendsa nenachadhilla' },
        { time: 240, text: 'Loves mattum sonnen hype ah' },
        { time: 245, text: 'Male : Ippo salambala salambala' },
        { time: 250, text: 'Adiyae gangamma' },
        { time: 255, text: 'Veruppula sirikkiren honeyee' },
        { time: 260, text: 'Male : Naanum polambala' },
        { time: 265, text: 'Polambala inimae naa bangamma' },
        { time: 270, text: 'Kalathula gelikiren thaniyae' },
        { time: 275, text: 'Male :  What the FISH…' }
    ],
    'yendi-vitu-pona': [
        { time: 0, text: 'Oru Nodiyil Kaadhal Nenjai Udaithaayadi' },
        { time: 5, text: 'Azhagaana Oviyathai Kizhithaaiyadi' },
        { time: 10, text: 'Siruppukkul Kaayam Veithu Sidhaithaayadi' },
        { time: 15, text: 'Vidhai Potta Kaiyyil Verai Saaithaayadi' },
        { time: 20, text: 'Serndhu Kanda Kanavugal Pizhaiyaa?' },
        { time: 25, text: 'Sonna Vaarthai Mothamum Poiyaa?' },
        { time: 30, text: 'Kanneer Ingu Sindhikondu' },
        { time: 35, text: 'Kelvi Ketkiren…' },
        { time: 40, text: 'Saagum Varaiyil Koodave Iruppen' },
        { time: 45, text: 'Endru Seidha Sathiyam Ellaam' },
        { time: 50, text: 'Rs 1 Trial' },
        { time: 55, text: 'Verum Vaarthaiyaa?' },
        { time: 60, text: 'Nee Pottadhu…' },
        { time: 65, text: 'Pagal Veshamaa?' },
        { time: 70, text: 'Yendi Vittu Pona' },
        { time: 75, text: 'Un Idhayam Kallaa Enna?' },
        { time: 80, text: 'Yendi Vittu Pona' },
        { time: 85, text: 'Nijamaa Puriyala Di' },
        { time: 90, text: 'Yendi Vittu Pona' },
        { time: 95, text: 'Naan Thaniya Inga Saaga' },
        { time: 100, text: 'Yendi Vittu Pona' },
        { time: 105, text: 'Haiyyo Valikkudha Di' },
        { time: 110, text: 'Unna Rasicha Yenakkidhu Venum' },
        { time: 115, text: 'Unna Nesicha Yenakkidhu Venum' },
        { time: 120, text: 'Unna Nambi Naan Kedandhene Yenakku Innum Venundi' },
        { time: 125, text: 'Theeyil Vizhum Eesalai Pola' },
        { time: 130, text: 'Un Vizhiyil Vizhundhavan Naano' },
        { time: 135, text: 'Uyir Mothamum Vendhu Thanindhu' },
        { time: 140, text: 'Kaandhal Aachudi' },
        { time: 145, text: 'Unnai Pirindhaal Anbe' },
        { time: 150, text: 'Ulagam Suzhalaadhadi' },
        { time: 155, text: 'Thannanthaniyaai Inime Naanum' },
        { time: 160, text: 'Ulaginil Vaazhndhu Ennadi' },
        { time: 165, text: 'Endhan Aagaayathin' },
        { time: 170, text: 'Nilave Nee Dhaana Di' },
        { time: 175, text: 'Unnai Naan Thedi' },
        { time: 180, text: 'Naan thedi' },
        { time: 185, text: 'En Aayul Theerattum Di' },
        { time: 190, text: 'Yendi Yendi Yendi' },
        { time: 195, text: 'Vittu Pona Nee' },
        { time: 200, text: 'En Nenja Mannula Neeyum' },
        { time: 205, text: 'Kuzhi Thondi Podhachitta Di' },
        { time: 210, text: 'Yendi Yendi Yendi' },
        { time: 215, text: 'Vittu Pona Nee' },
        { time: 220, text: 'Uyir Irundhum Pinatha Pola' },
        { time: 225, text: 'Unaala Maaritten Di' }
    ],
    'soi-soi': [
        { time: 0, text: 'Female : Soi soi soi soi' },
        { time: 5, text: 'Female : Kaiyalavu' },
        { time: 10, text: 'Nenjathila kadalalavu' },
        { time: 15, text: 'Aasa machan' },
        { time: 20, text: 'Female : Alavu yethum illa' },
        { time: 25, text: 'Adhuthaan kaadhal machan' },
        { time: 30, text: 'Naama jora man melae' },
        { time: 35, text: 'Sera vittalum nenaipe' },
        { time: 40, text: 'Pothum machan' },
        { time: 45, text: 'Female : Soi soi soi soi' },
        { time: 50, text: 'Female : Vaanalavu' },
        { time: 55, text: 'Vittathula varapalavu' },
        { time: 60, text: 'Thooram machan' },
        { time: 65, text: 'Female : Alavu thevaiyila' },
        { time: 70, text: 'Adhuthaan paasam machan' },
        { time: 75, text: 'Naama vendi kondaalum' },
        { time: 80, text: 'Venda vittalum saami' },
        { time: 85, text: 'Kekum machan' },
        { time: 90, text: 'Female : Soi soi soi soi' },
        { time: 95, text: 'Female : Yedalavu' },
        { time: 100, text: 'Ennathula ezhuthalavu' },
        { time: 105, text: 'Sikal machan' },
        { time: 110, text: 'Female : Alavu kolae illa' },
        { time: 115, text: 'Adhuthaan ooru machan' },
        { time: 120, text: 'Naama naalu peruku nanmai' },
        { time: 125, text: 'Senjalae adhuvae pothum machan' },
        { time: 130, text: 'Female : Naadalavu' },
        { time: 135, text: 'Kashtathila nagathalavu' },
        { time: 140, text: 'Ishtam machan' },
        { time: 145, text: 'Female : Alavu kodae illa' },
        { time: 150, text: 'Adhuthaan nesam machan' },
        { time: 155, text: 'Naama maandu ponalum' },
        { time: 160, text: 'Thooki thee vaika' },
        { time: 165, text: 'Uravu venum machan' },
        { time: 170, text: 'Female : Soi soi soi soi' },
        { time: 175, text: 'Female : Kaiyalavu' },
        { time: 180, text: 'Nenjathila kadalalavu' },
        { time: 185, text: 'Aasa machan alavu' },
        { time: 190, text: 'Yethum illa adhuthaan' },
        { time: 195, text: 'Kaadhal machan' },
        { time: 200, text: 'Female : Naama kaanum' },
        { time: 205, text: 'Ellamae kaiyil senthaalee' },
        { time: 210, text: 'Kavala yethu machan' },
        { time: 215, text: 'Female : { Soi soi soi soi } (2)' }
    ],
    'beep-song': [
        { time: 0, text: 'enna pun****ku love pannurom' },
        { time: 5, text: 'enna pun****ku love pannurom' },
        { time: 10, text: 'enna pun****ku love pannurom' },
        { time: 15, text: 'love-a endaa pannurom….' },
        { time: 20, text: 'santhosama irukkanumnu' },
        { time: 25, text: 'love-a pannurom' },
        { time: 30, text: 'santhosaththa kedukkumpadi' },
        { time: 35, text: 'avalum pannura' },
        { time: 40, text: 'ponnungala' },
        { time: 45, text: 'thittaatha maamaa…' },
        { time: 50, text: 'unna neeye' },
        { time: 55, text: 'thittiko maamaa (2)' },
        { time: 60, text: 'Podu…beep…podu…beep…' },
        { time: 65, text: 'enna pun****ku love pannurom' },
        { time: 70, text: 'enna pun****ku love pannurom' },
        { time: 75, text: 'enna pun****ku love pannurom' },
        { time: 80, text: 'love-a endaa pannurom…' },
        { time: 85, text: 'thanni adikkaatha…' },
        { time: 90, text: 'thaadiya valakkaatha' },
        { time: 95, text: 'thammu pudikksatha…' },
        { time: 100, text: 'totalaa waste-u…' },
        { time: 105, text: 'enna aanaalum' },
        { time: 110, text: 'avalukkaaga aluvatha..' },
        { time: 115, text: 'ponaa poraadaa' },
        { time: 120, text: 'past is fast-u….' },
        { time: 125, text: 'vittuttu poittaanu' },
        { time: 130, text: 'aluvaatha daaa' },
        { time: 135, text: 'unna vittutom-mennu' },
        { time: 140, text: 'ava aluvanum daaaa' },
        { time: 145, text: 'thothuto-mennu ni' },
        { time: 150, text: 'kalangkaatha daaaa' },
        { time: 155, text: 'un kaathaloda tholvi thaan' },
        { time: 160, text: 'un vaazkaiyoda vetri-ye…' },
        { time: 165, text: 'ponnungala' },
        { time: 170, text: 'thittaatha maamaa…' },
        { time: 175, text: 'unna neeye' },
        { time: 180, text: 'thittiko maamaa (2)' },
        { time: 185, text: 'love-a mattum' },
        { time: 190, text: 'pannaatha maamaa' },
        { time: 195, text: 'avala vena vach**ko' },
        { time: 200, text: 'maamaa aamaa…' },
        { time: 205, text: 'Podu…beep…podu…beep…' },
        { time: 210, text: 'aambala manacha' },
        { time: 215, text: 'odaikka therinjchaa thaanda' },
        { time: 220, text: 'pombala ava pombala' },
        { time: 225, text: 'antha odanjcha manasoda' },
        { time: 230, text: 'vazha therinjcha thaanda' },
        { time: 235, text: 'aambala namma aambala' },
        { time: 240, text: 'unakkaaga oruth-thi' },
        { time: 245, text: 'poranththurukka' },
        { time: 250, text: 'nee innum paakala' },
        { time: 255, text: 'avala paakkala' },
        { time: 260, text: 'unna dar darraa kilichchu' },
        { time: 265, text: 'uttuttu ponavala' },
        { time: 270, text: 'marakkala endaa' },
        { time: 275, text: 'innum marakkala' },
        { time: 280, text: 'unakkaaga oruthiya' },
        { time: 285, text: 'anuppa mudivu pannittaan' },
        { time: 290, text: 'athukkaaga ivala un' },
        { time: 295, text: 'kitta irrunthu pudingkittaan' },
        { time: 300, text: 'varuvaa… athu varaikkum' },
        { time: 305, text: 'ni moodittu summa' },
        { time: 310, text: 'irudaaaa maamaa…..' }
    ],
    'lungi-dance': [
        { time: 0, text: 'Moochhon ko thoda round ghumake' },
        { time: 5, text: 'Anna ke jaisa chashma lagake' },
        { time: 10, text: 'Coconut me lassi milake' },
        { time: 15, text: 'Aa jaao sare mood banake (x2)' },
        { time: 20, text: 'All the Rajini fans – Thalaivar' },
        { time: 25, text: 'Don\'t miss the chance – Thalaivar' },
        { time: 30, text: 'All the Rajini fans – Thalaivar' },
        { time: 35, text: 'Don\'t miss the chance – Do This!' },
        { time: 40, text: 'Lungi dance, lungi dance...' },
        { time: 45, text: 'Jado jawaani bada jor si ve jaalma' },
        { time: 50, text: 'Rs 1 Trial' },
        { time: 55, text: 'Main taa Rajini da fan si ve jaalma (x2)' },
        { time: 60, text: 'Disco me jab ye gana bajega' },
        { time: 65, text: 'On the floor aana padega' },
        { time: 70, text: 'Lungi ko uthana padega' },
        { time: 75, text: 'Step karke dikhana padega (x2)' },
        { time: 80, text: 'All the Rajini fans – Thalaivar' },
        { time: 85, text: 'Don\'t miss the chance – Thalaivar' },
        { time: 90, text: 'All the Rajini fans – Thalaivar' },
        { time: 95, text: 'Don\'t miss the chance – Do This' },
        { time: 100, text: 'Lungi dance, lungi dance...' },
        { time: 105, text: 'Night club mai aaya, mai toh' },
        { time: 110, text: 'Mujhko rokega kon aur kaiko' },
        { time: 115, text: 'Maira mood mai dance karega' },
        { time: 120, text: 'Kisika daddy sai ni darega' },
        { time: 125, text: 'Jisko jo bi hai wo karna wo kar lo' },
        { time: 130, text: 'Idhar hi hoon mai khada pakad lo' },
        { time: 135, text: 'Ghar pe jaake tum Google kar lo' },
        { time: 140, text: 'Mere bare me Wikipedia pe padh lo' },
        { time: 145, text: 'Lungi dance, lungi dance...' },
        { time: 150, text: 'Kon mujhsa hai kon' },
        { time: 155, text: 'Oh baby yes I am a don' },
        { time: 160, text: 'Nahi milega mujhsa go find it!' },
        { time: 165, text: 'Don\'t angry me, mind it!' },
        { time: 170, text: 'Arey mere jaise dance kisko aata hai' },
        { time: 175, text: 'Choreographer ko mai hi sikhata hai' },
        { time: 180, text: 'Woh ghar pe aata hai' },
        { time: 185, text: 'Mujhse seekh ke jaata hai' },
        { time: 190, text: 'Mujhse seekh ke woh logo ko sikhata hai' },
        { time: 195, text: 'Lungi dance, lungi dance...' },
        { time: 200, text: 'Moochhon ko thoda round ghumake' },
        { time: 205, text: 'Anna ke jaisa chashma lagake' },
        { time: 210, text: 'Coconut me lassi milake' },
        { time: 215, text: 'Aa jaao sare mood banake (x2)' },
        { time: 220, text: 'All the Rajini fans – Thalaivar' },
        { time: 225, text: 'Don\'t miss the chance – Thalaivar' },
        { time: 230, text: 'All the Rajini fans – Thalaivar' },
        { time: 235, text: 'Don\'t miss the chance – Do This!' },
        { time: 240, text: 'Lungi dance, lungi dance...' }
    ],
    'donu-donu': [
        { time: 0, text: 'Male : Donu donu donu' },
        { time: 5, text: 'Female : Naa unnoda gold meenu' },
        { time: 10, text: 'Male : Sceneu sceneu sceneu' },
        { time: 15, text: 'Female : Nee thotathellam sceneu' },
        { time: 20, text: 'Male : Maanu maanu maanu' },
        { time: 25, text: 'Female : Naan unnoda caffineu' },
        { time: 30, text: 'Male : Goneu goneu goneu' },
        { time: 35, text: 'Female : Nee paathale naan goneu' },
        { time: 40, text: 'Male : Gundaana kanaala kuthama kuthatha' },
        { time: 45, text: 'Nee unna thandhalum pathaathadi' },
        { time: 50, text: 'Roja poo dhegathaal raja naan saanjuten' },
        { time: 55, text: 'Un munne en gethu nikkadhadi' },
        { time: 60, text: 'Female : Uruguthae unthan aanmai paarthu' },
        { time: 65, text: 'Mayanguthae indha paavai thaan' },
        { time: 70, text: 'Thavikuthae yellai thaandi paarkka' },
        { time: 75, text: 'Thadukuthae pen naanam thaan' },
        { time: 80, text: 'Uruguthae.. mayanguthae..' },
        { time: 85, text: 'Thavikuthae.. thadukuthae pen naanam thaan' },
        { time: 90, text: 'Male : {I\'m a loyal husband' },
        { time: 95, text: 'Giving you royal treatment' },
        { time: 100, text: 'And your daily shopping is guarenteed' },
        { time: 105, text: 'Female : You\'re ma meesai maama' },
        { time: 110, text: 'I\'m your naughty maami' },
        { time: 115, text: 'Giving you a life time service warranty}(2)' },
        { time: 120, text: 'Male : Hey vaa maa twinkleu.. come and mingleu' },
        { time: 125, text: 'Namma kaatula naan thaan kingu' },
        { time: 130, text: 'Female : Modern manmadha.. aasa koodudha' },
        { time: 135, text: 'Kanna kattudha.. give me ringu' },
        { time: 140, text: 'Male : Naan sokkuren di.. vikkuren di' },
        { time: 145, text: 'Othaiyila nikkurendi' },
        { time: 150, text: 'Female : Naan thithikavaa.. pathikavaa' },
        { time: 155, text: 'Oththaikkotha aada ready' },
        { time: 160, text: 'Male : Uruguthae.. mayanguthae..' },
        { time: 165, text: 'Ehh thavikuthae. ehh. thadukuthae pen naanam thaan' },
        { time: 170, text: 'Female : Uruguthae unthan aanmai paarthu' },
        { time: 175, text: 'Mayanguthae indha paavai thaan' },
        { time: 180, text: 'Thavikuthae yellai thaandi paarkka' },
        { time: 185, text: 'Thadukuthae pen naanam thaan' },
        { time: 190, text: 'Male : Donu donu donu' },
        { time: 195, text: 'Female : Naa unnoda gold meenu' },
        { time: 200, text: 'Male : Sceneu sceneu sceneu' },
        { time: 205, text: 'Female : Nee thotathellam sceneu' },
        { time: 210, text: 'Male : Maanu maanu maanu' },
        { time: 215, text: 'Female : Naan unnoda caffineu' },
        { time: 220, text: 'Male : Goneu goneu goneu' },
        { time: 225, text: 'Female : Nee paathale naan goneu' },
        { time: 230, text: 'Male : Gudnaana kanaala kuthama kuthatha' },
        { time: 235, text: 'Nee unna thandhalum pathaathadi' },
        { time: 240, text: 'Roja poo dhegathaal raja naan saanjuten' },
        { time: 245, text: 'Un munne en gethu nikkadhadi' },
        { time: 250, text: 'Male : {I\'m a loyal husband' },
        { time: 255, text: 'Giving you royal treatment' },
        { time: 260, text: 'And your daily shopping is guarenteed' },
        { time: 265, text: 'Female : You\'re ma meesai maama' },
        { time: 270, text: 'I\'m your naughty maami' },
        { time: 275, text: 'Giving you a life time service warranty}(2)' }
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
    
    const img = document.getElementById('playerImg');
    img.style.backgroundImage = '';
    img.innerHTML = `${track.icon}<div class="equalizer" id="equalizer" style="display:none"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>`;
    document.getElementById('playerTitle').textContent = track.title;
    document.getElementById('playerArtist').textContent = track.artist;
    document.getElementById('totalTime').textContent = formatTime(track.duration);
    
    audio.src = track.src || '';
    audio.currentTime = 0;
    
    startPlayback();
    loadLyrics(trackId);
    showToast(`Now playing: ${track.title}`);
    
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