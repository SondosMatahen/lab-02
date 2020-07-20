'use stric'

var keyArray=[];
var animal=[];

$.get('data/page-1.json').then(data =>{
    
   
    data.forEach(element => {
        let obj=new Photo(element.image_url,element.title,element.description,element.keyword,element.horns);
         obj.render();
         obj.options();
    });
 
})

function Photo (image_url, title,description,keyword,horns ) {
this.image_url=image_url;
this.title=title;
this.description=description;
this.keyword=keyword;
this.horns=horns;
animal.push(this);
}

Photo.prototype.render=function(){

let sectionclone=$('#photo-template').clone();

sectionclone.removeAttr('id');
sectionclone.attr('class',this.keyword)
$('main').append(sectionclone);
sectionclone.find('h2').text(this.title);
sectionclone.find('img').attr({'src':this.image_url},{'alt':this.keyword})
sectionclone.find('p').text(this.description);


}




Photo.prototype.options=function(){

    if(!keyArray.includes(this.keyword)){
        keyArray.push(this.keyword);   
        // let opp=`<option>${this.keyword}</option>`;
        // $('select').append.(opp);
        $('select').append(`<option>${this.keyword}</option>`)
    }

}




 $('select').change(function(){
     $('section').hide();
     var value=$(this).val();
    $(`.${value}`).show();
     console.log(value);
     
 })
