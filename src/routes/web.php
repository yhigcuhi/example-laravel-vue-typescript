<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// org
// Route::get('/', function () {
//     return view('welcome');
// });

// 画面 一旦SPAとして組み込む (どの画面でも app.bladeになるようにする
Route::get('/{any}', function () { return view('app'); })->where('any', '.*');

