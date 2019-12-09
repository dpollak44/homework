
/*global $*/
(function () {
    'use strict';

    const nextButton = $("#nextThree");
    const lastButton = $("#lastThree");
    const showBloggers = $("#showBloggers");


    showBloggers.click(function () {
        $("#rightDiv").hide();
        $("#rightDiv").empty();
        $("#commentDiv").empty();
        $("#commentDiv").hide();
        $("#outerDiv").hide();
        $("#leftDiv").show();
    });

    $("#rightDiv").hide();
    $("#commentDiv").hide();
    $("#outerDiv").hide();




    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(BloggerData => {
            BloggerData.forEach(blogger => {
                const { id, name, website, company } = blogger;
                const companyInfo = Object.values(company);
                const li = `<li id ="bloggerLI"><ul>  <li>name: ${name}</li>  <li>website: ${website}</li>   <li>company info: ${companyInfo}</li>  </ul>  </li>)`;


                $(li).appendTo($("#bloggerUL")).click(function () {
                    $("#leftDiv").hide();
                    $("#rightDiv").show();
                    $("#commentDiv").show();
                    $("#outerDiv").show();
                    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                        .then(response => response.json())
                        .then(posts => {

                            let x = 0;
                            let y = 3;

                            function getfirstThree() {
                                let firstThree = posts.slice(x, y);
                                firstThree.forEach(post => {
                                    let postId = (`<h3>${post.id}</h3>`);
                                    let postBodyh = $('<span></span>');
                                    $("#rightDiv").append(postId);
                                    $("#commentDiv").append(postBodyh);
                                    let commentsButton = $('<button>show comments</button>');
                                    let toggle = true;
                                    commentsButton.appendTo($("#rightDiv"))
                                        .click(function () {

                                            if (toggle) {
                                                toggle = false;
                                                $("#commentDiv").empty();
                                                $("#commentDiv").append(`<h4>${post.body}<h4>`);
                                                commentsButton.text('hide comments');
                                            }
                                            else {
                                                toggle = true;
                                                commentsButton.text('show comments');

                                                $("#commentDiv").empty();

                                            }
                                        });



                                });

                            }

                            getfirstThree();


                            function nextThree() {

                                x += 3;
                                y += 3;
                                $("#rightDiv").empty();
                                getfirstThree();

                            }

                            function lastThree() {

                                x -= 3;
                                y -= 3;
                                $("#rightDiv").empty();
                                getfirstThree();

                            }

                            $(nextButton).click(function () {
                                if (y < posts.length) {
                                    nextThree();
                                }
                            });

                            $(lastButton).click(function () {
                                if (x > 0) {
                                    lastThree();
                                }
                            });



                        });




                });




            });
        });
}());