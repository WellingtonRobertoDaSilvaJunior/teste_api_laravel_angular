<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//======================================================================

Route::post('/pessoa', 'PessoaController@store');
Route::get('/pessoa', 'PessoaController@index');
Route::get('/pessoa/{id}', 'PessoaController@show');
Route::put('/pessoa/{id}', 'PessoaController@update');
Route::delete('/pessoa/{id}', 'PessoaController@destroy');

Route::get('/curso', 'CursoController@index');

Route::post('/pessoacurso', 'PessoaCursoController@store');
Route::get('/pessoacurso', 'PessoaCursoController@index');
Route::get('/pessoacurso/{id}', 'PessoaCursoController@show');
Route::delete('/pessoacurso/{id}', 'PessoaCursoController@destroy');