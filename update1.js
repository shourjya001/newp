if ($rptCode[$i]==1 || $rptCode[$i]==2) {
    $fileName[$i] = "dbe_rep_AuditExtCreationNotif.php";
}
else if ($rptCode[$i]==3) {
    $fileName[$i] = "dbe_rep_AuditExtCreationNotifComments.php";
}

echo 'Menu4_'.$j.'=new Array("'.$rptName[$i].'", "'.$fileName[$i].'?codUsr='.$cUser.
'&todo_type='.$todo.'&codgrp='.$cgrp.'&rptCode='.$rptCode[$i].'", "", 0,30,170);'."\n";




echo 'Menu4_'.$cnt.'=new Array("Audit for Comments", "dbe_rep_AuditExtCreationNotifComments.php?codUsr='.$cUser.'&todo_type='.$todo.'&codgrp='.$cgrp.'&rptCode=3", "", 0,30,170);'."\n";




// Add this debugging code
$url = "dbe_rep_AuditExtCreationNotifComments.php?codUsr=" . $cUser . 
       "&todo_type=" . $todo . 
       "&codgrp=" . $cgrp . 
       "&rptCode=3";
error_log("Generated URL: " . $url);

echo 'Menu4_'.$cnt.'=new Array("Audit for Comments", "' . $url . '", "", 0,30,170);'."\n";


// Add this debugging code
$url = "dbe_rep_AuditExtCreationNotifComments.php?codUsr=" . $cUser . 
       "&todo_type=" . $todo . 
       "&codgrp=" . $cgrp . 
       "&rptCode=". $rptCode[$i]. ;
error_log("Generated URL: " . $url);

echo 'Menu4_'.$cnt.'=new Array("'.$rptName[$i].'", "' . $url . '", "", 0,30,170);'."\n";
