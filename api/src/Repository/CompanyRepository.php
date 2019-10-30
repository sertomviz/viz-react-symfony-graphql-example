<?php

namespace App\Repository;

use App\Entity\Company;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Company|null find($id, $lockMode = null, $lockVersion = null)
 * @method Company|null findOneBy(array $criteria, array $orderBy = null)
 * @method Company[]    findAll()
 * @method Company[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompanyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Company::class);
    }

    /*-- save compoany entity to database -- */
    public function saveCompany($company)
    {

      $em = $this->getEntityManager();
      $em->persist($company);
      $em->flush();

    }

      /*-- remove compoany entity from database -- */
    public function deleteCompany($company)
    {

      $em = $this->getEntityManager();
      $em->remove($company);
      $em->flush();

    }


}
