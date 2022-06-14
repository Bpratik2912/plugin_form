$(function(){
$.validator.addMethod('fname', function (value) { 
  return /^[a-zA-Z]*$/.test(value); 
});
$.validator.addMethod('lname', function (value) { 
  return /^[a-zA-Z]*$/.test(value); 
});
$.validator.addMethod('Address1', function (value) { 
  return /^[a-zA-Z0-9]*$/.test(value); 
});
$.validator.addMethod('Address2', function (value) { 
return /^[a-zA-Z0-9]*$/.test(value); 
});
$.validator.addMethod('city', function (value) { 
  return /[a-zA-Z0-9]{3,600}$/.test(value); 
});
$.validator.addMethod('state', function (value) { 
  return /[a-zA-Z]{3,30}$$/.test(value); 
});
$.validator.addMethod('zipcode', function (value) { 
  return /[0-9]{6}$/.test(value); 
});
$.validator.addMethod('phone', function (value) { 
  return /\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/.test(value); 
});
$.validator.addMethod('email', function(value){
});
  // debugger
    $('form').validate({
    rules:{
      fname:{
          required: true,
          minlength: 3,
          fname : true,
      },
      lname:{
        required: true,
        minlength: 3,
        lname : true,
      },
      Address1:{
        required: true,
        minlength: 3,
        Address1: true,
      },
      Address2:{
        required: true,
        minlength: 3,
        Address2: true,
      },
      city:{
        required: true,
        minlength: 3,
        city: true,
      },
      state:{
        required: true,
        minlength: 3,
        state: true,
      },
      zipcode:{
        required: true,
        minlength: 6,
        maxlength : 6,
        zipcode: true,
      },
      phone:{
        required: true,
        // minlength: 3,
        phone: true,
      },
      email:{
        required: true,
        // minlength: 3,
        email: true,
      },
      feedback:{
        required: true, 
        minlength: 3,
        feedback: true,
      },
      suggestion:{
        required: true,
        minlength: 3,
        suggestion: true,
      },
      gender:{
        required: true,
        },     
                          

    errorPlacement: function(error, element) {
      if ( element.attr('name') == 'gender' ) {
        error.insertAfter("#others");
        }
      else { 
        error.insertAfter( element);
        }
      }
      },
    messages:{
        fname: "First name is required",
        lname: "Last name is required",
        Address1:"Address is required",
        Address2:"Address is required",
        city:"City name is required",
        state:"State name is required",
        zipcode:"Zipcode is requried",
        phone:"Contact number is required",
        email:"Please enter vaild email",
        feedback:"enter feedback",
        suggestion:"enter suggestion",
        gender:"please select any of the gender",
      },
      submitHandler: function() {
      }
 });
})
