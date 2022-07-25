import * as request from '../api.js';
import {loadBooks} from './booksView.js';

export async function del(id) {
    await request.del('/jsonstore/collections/books/' + id)
    loadBooks()
}