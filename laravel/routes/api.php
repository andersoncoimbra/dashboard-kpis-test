<?php

use App\Http\Controllers\Api\KpiController;
use Illuminate\Support\Facades\Route;


Route::get('/kpis',[KpiController::class, 'index'])->name('kpis.index');
