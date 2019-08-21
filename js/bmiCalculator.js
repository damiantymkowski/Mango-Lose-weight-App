

$("#calcBMI").click(function(){
    $('.error_status').html();
            $.ajax({
                type: "POST",
                url: "https://localhost/mango/site.php/includes/bmi.inc.php",
                data: postForm,
                success: function(msg) {
                    var msg = $.parseJSON(msg);
                    if(msg.success=='yes')
                    {
                        return true;
                    }
                    else
                    {
                        alert('Server error');
                        return false;
                    }
                }
            });
        return false;
    });


