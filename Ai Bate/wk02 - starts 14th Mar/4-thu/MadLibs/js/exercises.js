// const $button = $("#lib-button");

const makeMadLib = function(){
    //retrieve the current values of the form input 
    const noun = $('#noun').val()
    const adjective = $('#adjective').val()
    const name = $("#person").val()
    //build story
    const story = `<p>${ name } really likes ${ adjective } ${ noun }.</p>`;

    //display story
    $('#story').prepend(story);
}

$('#lib-button').on('click',makeMadLib);



// const button = document.getElementById('lib-button');

// const makeMadLib = function () {
//     // retrieve the current values of the form input elements
//     const noun = document.getElementById('noun').value;
//     const adjective = document.getElementById('adjective').value;
//     const name = document.getElementById('person').value;

//     const story = `${ name } really likes ${ adjective } ${ noun }.`;
//     document.getElementById('story').innerHTML = story;
// };

// button.addEventListener('click', makeMadLib); 