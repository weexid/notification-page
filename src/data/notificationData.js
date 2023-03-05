const now = new Date();
export const notifData = [
    {profile: './img/avatar-mark-webber.webp', nama: "Mark Webber", title: "reacted to your recent post", subject: "My first tournament today!", timestamp: new Date(now.getTime() - 1 * 60 * 1000).toString(), description: null, read: false},
    {profile: '/img/avatar-angela-gray.webp', nama: "Angela Gray", title: "followed you", subject: null, timestamp: new Date(now.getTime() - 300 * 1000).getTime(), description: null, read: false},
    {profile: '/img/avatar-jacob-thompson.webp', nama: "Jacob Thompson" , title: "has joined your group", subject: "Chess Club", timestamp: new Date(now.getTime() - 24 * 60 * 60 * 1000).getTime(), description: null, read: false},
    {profile: '/img/avatar-rizky-hasanuddin.webp', nama: "Rizky Hasanuddin" , title: "sent you a private message", subject: null, timestamp: new Date(now.getTime() - 120 * 60 * 60 * 1000).getTime(), description: "Hello, thanks for setting up the Chess Club. i've been a member for a few weeks now and i'm already having lots of fun and improving my game", read: true},
    {profile: '/img/avatar-kimberly-smith.webp', nama: "Kimberly Smith" , title: "commented on your picture", subject: null, thumbnail:'/img/image-chess.webp', timestamp: new Date(now.getTime() - 168 * 60 * 60 * 1000).getTime(), description: null, read: true},
    {profile: '/img/avatar-nathan-peterson.webp', nama: "Nathan Peterson" , title: "reacted to your recent post", subject: "5 end-game strategies to increase your win rate", timestamp: new Date(now.getTime() - 336 * 60 * 60 * 1000).getTime(), description: null, read: true},
    {profile: '/img/avatar-anna-kim.webp', nama: "Anna Kim" , title: "left the group", subject: "Chess Club", timestamp: new Date(now.getTime() - 336 * 60 * 60 * 1000).getTime(), description: null, read: true},

]
