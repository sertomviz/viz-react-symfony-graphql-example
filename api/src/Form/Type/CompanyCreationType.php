<?php

namespace App\Form\Type;

use Symfony\Component\Form\{AbstractType, FormBuilderInterface};
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\{NotBlank, Length, Choice};
use App\DTO\CompanyDTO;
use App\Entity\Company;
use App\Validator\Constraint\UniqueCompanyName;

class CompanyCreationType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
          ->add('name', null, ['constraints' => [
              new NotBlank(),
              new Length(['max' => 100]),
              new UniqueCompanyName([]),
          ]])
          ->add('website', null, ['constraints' => [

          ]])
          ->add('country', null, ['constraints' => [

          ]]);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CompanyDTO::class,
            'csrf_protection' => false,
        ]);
    }
}
