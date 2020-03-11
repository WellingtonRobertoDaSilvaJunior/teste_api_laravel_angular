<?php

namespace App\Models\Entities;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $primaryKey = 'Id';
    public $timestamps = false;

    protected $fillable = [
        'Nome'
    ];
}
