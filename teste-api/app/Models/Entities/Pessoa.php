<?php

namespace App\Models\Entities;

use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model
{
    protected $primaryKey = 'Id';
    public $timestamps = false;

    protected $fillable = [
        'Nome',
        'Telefone',
        'CPF'
    ];
}
