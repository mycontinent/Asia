// For Authorization values please use URL
// https://www.blitter.se/utils/basic-authentication-header-generator/  
// U have to pass github username and password to the above URL which 
// will generate the Basic encrypted value

const Identifiers = {
    Authorization: "Basic c2FnYXJ2aXNod2Fzc3VydmU6Q2l0aXVzdGVjaEAxMDE=",  
    UserAgent: "Mozilla/5.0 (Windows NT 5.1; rv:19.0) Gecko/20100101 Firefox/19.0",
    Host: "api.github.com",
    url: "https://api.github.com/repos/sagarvishwassurve/PractiseApp/pulls/2/comments"
}



module.exports = Identifiers;