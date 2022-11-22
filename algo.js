VAR
   c:STRING;
BEGIN
function test (ch) {
    BEGIN
 VAR 
    nv,ns,l,i : INTEGER;
    nv:=0;
    ns:=0;
    l:=0;
    for (i=0; i<ch.length; i++)  do {
        BEGIN
    if (ch[i] in ["Y","E","O","A","I","U"]){
        BEGIN
    nv+=1
    else{
    if ch[i] = " "
    ns+=1}
END
 }
 END
    }
write(l);
write(nv);
write(ns);
END
}
    
END
