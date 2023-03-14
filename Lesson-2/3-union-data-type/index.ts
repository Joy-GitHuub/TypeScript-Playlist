let userId : string | number | boolean;

userId = '101';
userId = 101;
userId = true;

function displayUserInfo(userId: string | number) {
    console.log(userId);
};

displayUserInfo( "101");
displayUserInfo( 101);