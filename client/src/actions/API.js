import axios from "axios"

export default {
    /*
        // Get book from google search 
        getGoogleSearchBooks: function(query) {
            return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        },
    
        // Gets all books
        getBooks: function () {
            return axios.get("/api/books");
        },
    
        // Gets the book with the given id
        getBook: function (id) {
            return axios.get("/api/books/" + id);
        },
    
        // Saves a book to the database
        saveBook: function (savedBooks) {
            return axios.post("/api/books", savedBooks);
        },
    
        // Deletes the book with the given id
        deleteBook: function (id) {
            return axios.delete("/api/books/" + id);
        }
    
    }
    */
    deleteFolder: function(id) {
        console.log(id);
        return axios.delete("/api/folders/delete/" + id);
    },

    getFilef: function(id, idf) {
        console.log(id);
        const params = [{ id: id }, { idf: idf }]

        return axios.get("/api/files/filef/" + id + "/" + idf);
    },


    getFolder: function(id) {
        console.log(id);
        return axios.get("/api/folders/folder/" + id);
    },

    deleteFile: function(id) {
        console.log(id);
        return axios.delete("/api/files/delete/" + id);
    },

    getFile: function(id) {
        console.log(id);
        return axios.get("/api/files/file/" + id);
    }



}