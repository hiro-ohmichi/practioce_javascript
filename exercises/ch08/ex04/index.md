function()直近のものをthisとするので、objはthisにならずfalse,nestがtrueになる
アロー関数はthisを継承するのでobjがtrue、nestがfalse

結果は
false true
true false
