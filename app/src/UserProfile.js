var UserProfile = (function() {
    var customerId = 0;
  
    var getCustomerId = function() {
      return localStorage.getItem('userKey');    // Or pull this from cookie/localStorage
    };
  
    var setCustomerId = function(customerId) {
        customerId = customerId;     
        localStorage.setItem('userKey', customerId);
      // Also set this in cookie/localStorage
    };
  
    return {
        getCustomerId: getCustomerId,
        setCustomerId: setCustomerId
    }
  
  })();
  
  export default UserProfile;