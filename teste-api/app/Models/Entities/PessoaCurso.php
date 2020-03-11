<?php

namespace App\Models\Entities;

use Illuminate\Database\Eloquent\Model;

class PessoaCurso extends Model
{
    protected $primaryKey = 'Matricula';
    public $timestamps = false;

    protected $fillable = [
        'CdPessoaId',
        'CdCursoId'
    ];
}
