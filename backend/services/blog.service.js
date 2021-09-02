const https = require('https');
const axios = require('axios');
class BlogService {
    
    async criarObjetoDados(){
        const usuarios = await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.data
        })
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            return response.data
        })
        const objetoCompleto = {usuarios: usuarios, posts: posts}
        return objetoCompleto
    }

    async informacoesUsuario(id){
        const informacoesUsuario = await axios.get('https://jsonplaceholder.typicode.com/users/'+id).then((response) => {
            return response.data
        })
        return informacoesUsuario
    }

    async getInformacoesPost(id){
        const informacoesPost = await axios.get('https://jsonplaceholder.typicode.com/posts/').then((response) => {
            return response.data[id-1]
        })
        const comentarios = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').then((response) => {
            return response.data
        })

        const objetoPostcomentarios = {informacoesPost: informacoesPost, comentarios: comentarios}
        return objetoPostcomentarios
    }
}

module.exports = new BlogService