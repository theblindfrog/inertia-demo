<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactUsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia\Inertia::render('Home', [
        'time' => now()->format('Y-m-d H:i:s')
    ]);
});

Route::get('/contact-us', [ContactUsController::class, 'index'])->name('contactus.index');
Route::post('/contact-us', [ContactUsController::class, 'store'])->name('contactus.store');
