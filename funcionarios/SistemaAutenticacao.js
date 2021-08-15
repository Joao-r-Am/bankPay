/*
ser autenticavel significa ter o metodo autenticar

duck type
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticvel(autenticavel)){
        return autenticavel.autenticar(senha);
    }
    return false;
    }
    static ehAutenticvel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}