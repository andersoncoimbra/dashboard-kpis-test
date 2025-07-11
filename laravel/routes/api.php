<?php

use App\Http\Controllers\Api\KpiController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/kpis', [KpiController::class, 'index'])->name('kpis.index');
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});


Route::post('/login', function (Request $request) {
    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Credenciais inválidas'], 401);
    }

    $token = $user->createToken('frontend')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user,
    ]);
});

Route::post('/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Desconectado com sucesso']);
});
