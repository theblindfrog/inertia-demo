<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ContactUsController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact', []);
    }
}
