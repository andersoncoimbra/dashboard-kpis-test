<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kpi;

class KpiController extends Controller
{
    public function index(Request $request)
    {
        $kpis = Kpi::all();
        return response()->json($kpis);
    }
}
