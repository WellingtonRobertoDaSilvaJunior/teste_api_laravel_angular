<?php

namespace App\Http\Controllers;

use App\Models\Entities\Curso;

class CursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = Curso::all();

            return \response()->json($data, 200);
        } catch(\Exception $err) {
            $msg = "Erro ao consultar!";
            
            return \response()->json($msg, 500);
        }
    }
}
