function generateCV(){
    let nameField = document.getElementById("name").value;
    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;

    document.getElementById("emailT").innerHTML= document.getElementById("email").value;

    document.getElementById("contactT").innerHTML= document.getElementById("contact").value;

    document.getElementById("objectiveT").innerHTML= document.getElementById("objective").value;

    document.getElementById("skillsT").innerHTML= document.getElementById("skills").value;

   

    let file= document.getElementById("img").files[0];

    if(file!=null){
        let reader = new FileReader();

         reader.readAsDataURL(file);

        reader.onloadend = function(){
        document.getElementById("imgT").src= reader.result;
        }
    }
 

    document.getElementById("LinkedinT").innerHTML= document.getElementById("Linkedin").value;
    document.getElementById("LinkedinT").href=document.getElementById("Linkedin").value;

    document.getElementById("githubT").innerHTML= document.getElementById("github").value;
    document.getElementById("githubT").href= document.getElementById("github").value;

    document.getElementById("codechefT").innerHTML= document.getElementById("codechef").value;
    document.getElementById("codechefT").href= document.getElementById("codechef").value;

    document.getElementById("hackerrankT").innerHTML= document.getElementById("hackerrank").value;
    document.getElementById("hackerrankT").href= document.getElementById("hackerrank").value;

    document.getElementById("1cmpNameT").innerHTML= document.getElementById("1cmpName").value;

    document.getElementById("1positionT").innerHTML= document.getElementById("1position").value;

    document.getElementById("1durationT").innerHTML= document.getElementById("1duration").value;

    document.getElementById("1descT").innerHTML= document.getElementById("1desc").value;

    document.getElementById("2cmpNameT").innerHTML= document.getElementById("2cmpName").value;

    document.getElementById("2positionT").innerHTML= document.getElementById("2position").value;

    document.getElementById("2durationT").innerHTML= document.getElementById("2duration").value;

    document.getElementById("2descT").innerHTML= document.getElementById("2desc").value;

    
    document.getElementById("collegeNameT").innerHTML= document.getElementById("collegeName").value;
    document.getElementById("collegeYearT").innerHTML= document.getElementById("collegeYear").value;
    document.getElementById("qualificationT").innerHTML= document.getElementById("qualification").value;
    document.getElementById("clgCgpaT").innerHTML= document.getElementById("clgCgpa").value;
    document.getElementById("schoolNameT").innerHTML= document.getElementById("schoolName").value;
    document.getElementById("sclYearT").innerHTML= document.getElementById("sclYear").value;
    document.getElementById("sscCgpaT").innerHTML= document.getElementById("sscCgpa").value;
    document.getElementById("hscCgpaT").innerHTML= document.getElementById("hscCgpa").value;

    document.getElementById("p1titleT").innerHTML= document.getElementById("p1title").value;
    document.getElementById("p1LinkT").innerHTML= document.getElementById("p1Link").value;
    document.getElementById("p1LinkT").href= document.getElementById("p1Link").value;
    document.getElementById("p1DescT").innerHTML= document.getElementById("p1Desc").value;

    document.getElementById("p2titleT").innerHTML= document.getElementById("p2title").value;
    document.getElementById("p2LinkT").innerHTML= document.getElementById("p2Link").value;
    document.getElementById("p2LinkT").href= document.getElementById("p2Link").value;
    document.getElementById("p2DescT").innerHTML= document.getElementById("p2Desc").value;

    document.getElementById('cv-form').style.display ='none';
    document.getElementById('cv-template').style.display ='block';

}
function printCV(){
    html2pdf().from(document.getElementById('printDoc')).save();
}