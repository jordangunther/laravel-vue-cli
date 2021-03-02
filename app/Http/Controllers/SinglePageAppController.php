<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageAppController extends Controller
{
    public function index()
    {
        return view('index');
    }
}
