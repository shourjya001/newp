if ($rptCode[$i]==1 || $rptCode[$i]==2) {
    $fileName[$i] = "dbe_rep_AuditExtCreationNotif.php";
}
else if ($rptCode[$i]==3) {
    $fileName[$i] = "dbe_rep_AuditExtCreationNotifComments.php";
}

echo 'Menu4_'.$j.'=new Array("'.$rptName[$i].'", "'.$fileName[$i].'?codUsr='.$cUser.
'&todo_type='.$todo.'&codgrp='.$cgrp.'&rptCode='.$rptCode[$i].'", "", 0,30,170);'."\n";
