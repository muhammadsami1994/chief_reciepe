angular.module('muslimChef.dataService', [])

  .factory('dataService', function () {

    // Some fake testing data for feeds
    var feeds = [
      {
        name: 'NICHOLAS SAVAGE',
        postedOn: '15 MIN AGO',
        dishType: 'Indian',
        dishTitle: 'Chicken Korma with Rice',
        lastLikedPerson: 'STACY MARTIN',
        totalLikes: '27',
        lastCommentedPerson: 'GEORGE MARTIN',
        lastComment: "I really don't get what all the fuss is about. she could never compare to Cind, Christy and others",
        iLiked: true,
        userImage:'img/adam.jpg',
        imgUrl: 'img/chicken%20korma.png'
      }, {
        name: 'ROMAN SHALENKIN',
        postedOn: '15 MIN AGO',
        dishType: 'Biscuits',
        dishTitle: 'Fried Rice',
        lastLikedPerson: 'DANIEL RADCLIFFE',
        totalLikes: '27',
        lastCommentedPerson: 'RUPERT GRINT',
        lastComment: "I really don't get what all the fuss is about. she could never compare to Cind, Christy and others",
        iLiked: false,
        userImage:'img/adam.jpg',
        imgUrl: 'img/chicken%20korma.png'
      }];
    var popular = [
      {
      img:'img/img1.png'
      },{
      img:'img/img2.png'
      },{
      img:'img/img3.png'
      },{
      img:'img/img4.png'
      },{
      img:'img/img5.png'
      },{
      img:'img/img6.png'
      }];
    var explore = [
      {
      img:'img/explore2.png',
        recipeCount:'113',
        recipe:'Breakfast'
      },{
      img:'img/explore1.png',
        recipeCount:'59',
        recipe:'Lunch'
      },{
      img:'img/explore3.png',
        recipeCount:'3456',
        recipe:'Beverages'
      },{
      img:'img/explore4.png',
        recipeCount:'643',
        recipe:'Appetizers'
      },{
      img:'img/explore5.png',
        recipeCount:'534',
        recipe:'Soups'
      },{
      img:'img/explore6.png',
        recipeCount:'65',
        recipe:'Salads'
      }];
    var people= [{
      name:'NICHOLUS SAVAGE',
      userImage:'img/adam.jpg',
      country: 'SWEDEN',
      images:['img/postImages1.png','img/postImages2.png','img/postImages3.png','img/postImages4.png','img/postImages5.png','img/postImages6.png']
      },{
      name:'ROMAN GAVRAS',
      userImage:'img/ben.png',
      country: 'SOUTH AFRICA',
      images:['img/postImages6.png','img/postImages7.png','img/postImages8.png','img/postImages9.png','img/postImages10.png','img/postImages6.png']
      },{
      name:'ROMAN SHALENKIN',
      userImage:'img/perry.png',
      country: 'INDIA',
      images:['img/postImages1.png','img/postImages2.png','img/postImages3.png','img/postImages4.png','img/postImages5.png','img/postImages6.png']
      },{
      name:'DOUGLAS COUPLAND',
      userImage:'img/max.png',
      country: 'THAILAND',
      images:['img/postImages6.png','img/postImages7.png','img/postImages8.png','img/postImages9.png','img/postImages10.png','img/postImages6.png']
      }]
    return {
      getFeeds: function(){
        return feeds
      },
      getPopular:function(){
        return popular
      },
      getExplore:function(){
        return explore
      },
      getPeople: function(){
        return people
      }
    };
  });
