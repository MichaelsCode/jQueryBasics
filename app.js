//Problem hints are shown even when from is valid
//solution hide and show them appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//hide hints 
$("form span").hide();

function isPasswordValid(){
  return $password.val().length > 8;
}

function arePasswordMatching(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit(){
  return isPasswordValid() && arePasswordMatching();
  }

function passwordEvent(){
  //find out if password is valid
  if(isPasswordValid()){
   //hide hint if valid
   $password.next().hide(); 
  }else{
   //else show hint
   $password.next().show();
  }
}

function confirmPasswordEvent(){
  //find out if password and confirmation match
  if(arePasswordMatching()){
    //hide hint if match
    $confirmPassword.next().hide();
  }else{
    //else show hint 
    $confirmPassword.next().show();
  }  
}

function enableSubmitEvent(){
  !
  $("#submit").prop("disabled",!canSubmit())
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


//when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
  
