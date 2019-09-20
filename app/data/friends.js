// Store data in an object
var profiles = [{
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
    name: "Jacob Deming",
    photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
    name: "Jeremiah Scanlon",
    photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
}, {
    name: "Louis T. Delia",
    photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
}, {
    name: "Lou Ritter",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
}, {
    name: "Jordan Biason",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
}, {
    name: "John Doe",
    photo: "https://www.google.com/search?q=person&sxsrf=ACYBGNTksUcLvx9_pQx19rh3VD_O2btP0Q:1568677886781&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj4ldXBxNbkAhUIgK0KHST-Dx0Q_AUIEigB&biw=1536&bih=705#imgrc=UJOu7Z9OtzrXCM:",
    scores: ["3", "3", "4", "5", "5", "4", "4", "4", "3", "3"]
}, {
    name: "David Ward",
    photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwwtnO09bkAhVPdt8KHfmIDDoQjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBoo-Boo_Bear&psig=AOvVaw3Xnyj2p_IihzRuRwPKmmaY&ust=1568768338996023",
    scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
}, {
    name: "Diablo",
    photo: "https://cdn.vox-cdn.com/thumbor/Q8Ts-rN0jDs8UNjrh5Broa0loOI=/0x0:3480x1837/1200x800/filters:focal(1437x251:1993x807)/cdn.vox-cdn.com/uploads/chorus_image/image/62177207/Diablo_Bone.0.jpg",
    scores: ["5", "1", "5", "5", "3", "5", "5", "5", "1", "5"]
}, {
    name: "someone",
    photo: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/05/26/102707152-88830741.1910x1000.jpg",
    scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
}, {
    name: "someone",
    photo: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/05/26/102707152-88830741.1910x1000.jpg",
    scores: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
}, {
    name: "someone",
    photo: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/05/26/102707152-88830741.1910x1000.jpg",
    scores: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
}, {
    name: "someone",
    photo: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/05/26/102707152-88830741.1910x1000.jpg",
    scores: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
}, {
    name: "Drew",
    photo: "abc.com",
    scores: ["3", "4", "4", "4", "4", "3", "3", "4", "4", "4"]
}, {
    name: "Davi",
    photo: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
    scores: ["2", "3", "2", "2", "2", "2", "2", "2", "2", "2"]
}, {
    name: "Tierra",
    photo: "https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-1/p100x100/13226866_10209330505360373_207612452669017645_n.jpg?_nc_cat=100&_nc_oc=AQmiMMRTiRGZK-5Ui7xTYOexyfE7J_DWh-R5h3hvx8ehpdmlLvaJl8_yLiXiGxjLn1c&_nc_ht=scontent.fhou1-1.fna&oh=1649180487e8df1286916afa37aab607&oe=5DF5FF61",
    scores: ["2", "3", "3", "3", "3", "3", "2", "2", "2", "3"]
}, {
    name: "Tierra",
    photo: "https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-1/p100x100/13226866_10209330505360373_207612452669017645_n.jpg?_nc_cat=100&_nc_oc=AQmiMMRTiRGZK-5Ui7xTYOexyfE7J_DWh-R5h3hvx8ehpdmlLvaJl8_yLiXiGxjLn1c&_nc_ht=scontent.fhou1-1.fna&oh=1649180487e8df1286916afa37aab607&oe=5DF5FF61",
    scores: ["2", "3", "3", "3", "3", "3", "2", "2", "2", "3"]
}, {
    name: "Tierra",
    photo: "https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-1/p100x100/13226866_10209330505360373_207612452669017645_n.jpg?_nc_cat=100&_nc_oc=AQmiMMRTiRGZK-5Ui7xTYOexyfE7J_DWh-R5h3hvx8ehpdmlLvaJl8_yLiXiGxjLn1c&_nc_ht=scontent.fhou1-1.fna&oh=1649180487e8df1286916afa37aab607&oe=5DF5FF61",
    scores: ["2", "3", "3", "3", "3", "3", "2", "2", "2", "3"]
}]

// export the object so the rest of the application can use item
module.exports = profiles;