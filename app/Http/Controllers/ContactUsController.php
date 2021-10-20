<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ContactFormRequest;

class ContactUsController extends Controller
{
    public function index(): InertiaResponse
    {
        return Inertia::render('Contact', []);
    }

    public function store(ContactFormRequest $request): RedirectResponse 
    {
        // Mail::queue(...)
        sleep(3);

        session()->flash('message', 'Contact form sent successfully');

        return Redirect::route('contactus.index')->with('flash', 'Enquiry Sent');
    }
}
